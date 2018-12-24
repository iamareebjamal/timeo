const { parse } = require("url");
const timeo = require('./timeo');

module.exports = (req, res) => {
    const { query } = parse(req.url, true);
    const { timezone } = query;
    req.query = {
        timezone
    };
    res.end(timeo.parseAndGetTime(req));
}
