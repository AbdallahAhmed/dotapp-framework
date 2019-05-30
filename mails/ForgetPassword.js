import Template from '~/services/mail/template';

export default class extends Template {

    handle(user, callback) {

        this.render("mails/auth/forget_password", {user}, (error, data) => {
            if (error && callback) return callback(error);

            this.send({
                to: user.email,
                subject: this.req.lang("auth.password_reset_verification"),
                html: data
            }, (error, info) => {
                if (error && callback) return callback(error);
                if(callback) return callback(null, info);
            });

        });
    }
}