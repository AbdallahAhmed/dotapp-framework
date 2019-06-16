import jwt from 'jsonwebtoken';
import Controller from "~/controllers/Controller";
import User from '~/models/user';
import Config from '~/services/config';

export default class extends Controller {

    /**
     * Request a new api token
     * @param req
     * @param res
     * @returns {*}
     */
    token(req, res) {

        let email = req.param("email");
        let password = req.param("password");

        User.findOne({email: email}, function (error, user) {

            if (error) return res.serverError(error);
            if (!user) return res.validationError(req.lang("auth.email_not_found"));

            user.comparePassword(password, function (error, valid) {

                if (error) return res.serverError(error);
                if (!valid) return res.validationError(req.lang("auth.invalid_password"));

                if (user.status !== 1) {
                    return res.forbidden();
                }

                let response = user.toObject();

                response.token = jwt.sign(
                    user.toJSON(),
                    Config.get("jwt.secret"),
                    {expiresIn: Config.get("jwt.expires")}
                );

                response.token_expiration = Config.get("jwt.expires");

                res.ok(response);
            });
        });
    }

    /**
     * Forget password
     * @param req
     * @param res
     * @returns {*}
     */
    forget(req, res) {

        let email = req.param("email");

        User.findOne({email: email}, function (error, user) {

            if (error) return res.serverError(error);
            if (!user) return res.validationError(req.lang("auth.email_not_found"));

            user.password_token = Math.random().toString(36).slice(-8);
            user.password_token_expiration = Date.now() + 3600000;

            user.save(function (error, user) {
                if (error) return res.serverError(error);

                req.mail(user, "ForgetPassword", (error, info) => {
                    if (error) throw error;
                    console.log(info);
                });

                return res.message(req.lang("auth.events.password_reset_code_sent")).ok();
            });
        });
    }

    /**
     * Reset password
     * @param req
     * @param res
     * @returns {*}
     */
    reset(req, res) {

        let code = req.param("code");

        User.findOne({password_token: code, password_token_expiration: {$gt: Date.now()}}, function (error, user) {
            if (error) return res.serverError(error);
            if (!user) return res.validationError(req.lang("auth.invalid_password_verification_code"));

            user.comparePassword(req.param("password"), function (error, same) {

                if (error) return res.serverError(error);
                if (same) return res.validationError(req.lang("auth.cannot_use_same_password"));

                user.password = req.param("password");
                user.password_token = undefined;
                user.password_token_expiration = undefined;

                user.save(function (error, user) {
                    if (error) return res.serverError(error);

                    req.mail(user, "PasswordChanged");

                    return res.message(req.lang("auth.events.password_changed")).ok();
                });
            });
        });
    }

    /**
     * Request user by token
     * @param req
     * @param res
     * @returns {*}
     */
    user(req, res) {

        User.findById(req.user.id).populate("photo").exec((error, user) => {
            if (error) return res.serverError(error);
            if (!user) return res.notFound(req.lang("user.errors.user_not_found"));

            user = user.toObject();

            let permissions = Config.get("permissions");

            let myPermissions = [];

            for (let module in permissions) {
                permissions[module].forEach(action => {
                    if (req.hasPermission(module + "." + action)) {
                        myPermissions.push(module + "." + action);
                    }
                });
            }

            user.permissions = myPermissions;

            return res.ok(user);
        });
    }
};

