const { DateTime } = require('luxon')

function parseAndGetTime(request) {
    const timezone = (request.query && request.query.timezone) || 'Asia/Kolkata';
    return DateTime.local().setZone(timezone).toFormat('yyyy-MM-dd HH:mm:ss');
}

module.exports = {
    parseAndGetTime
}
