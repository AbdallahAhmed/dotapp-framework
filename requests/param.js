let castValue = (value) => {
    return !isNaN(value) && value !== "" ? Number(value) : value;
}

export default function (name, defaultValue) {
    let params = this.req.params || {};
    let body = this.req.body || {};
    let query = this.req.query || {};

    if (null != params[name] && params.hasOwnProperty(name)) return castValue(params[name]);
    if (null != body[name]) return castValue(body[name]);
    if (null != query[name]) return castValue(query[name]);

    return defaultValue;
};