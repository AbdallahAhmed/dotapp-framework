#!/usr/bin/env node

require('~/services/database');

import Config from '~/services/config';
import Log from '~/services/log';
import Router from '~/services/router';
import express from 'express';
import Compression from "~/middlewares/compression";
import Http from "~/middlewares/http";
import Token from "~/middlewares/token";
import Assets from "~/middlewares/assets";
import Cors from "~/middlewares/cors";
import I18n from "~/middlewares/i18n";
import BodyParser from "~/middlewares/body";
import Json from "~/middlewares/json";
import Logger from "~/middlewares/logger";
import Views from "~/middlewares/views";
import Docs from '~/middlewares/docs';
import NotFound from "~/middlewares/notFound";
import ServerError from "~/middlewares/serverError";
import routes from "~/routes";

const app = express();

app.set("env", process.env.NODE_ENV);
app.set("views", Config.get("app.views"));
app.set("view engine", Config.get("app.view_engine"));
app.set("x-powered-by", Config.get("app.x_powered_by"));
app.set('trust proxy', Config.get("app.trust_proxy"));

app.use(Compression());
app.use(Http());
app.use(Token());
app.use(I18n());
app.use(Logger());
app.use(Assets());
app.use(Cors());
app.use(BodyParser());
app.use(Json());
app.use(Views());

app.use("/", Router.map(routes));
app.use('/docs', Docs());

app.use(NotFound());
app.use(ServerError());

app.listen(Config.get('app.port'), function () {
    Log.message('Server is listening at port ' + Config.get('app.port'), 'info');
});
