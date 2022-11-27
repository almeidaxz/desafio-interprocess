const { format } = require('date-fns');
const { utcToZonedTime } = require('date-fns-tz');

const formatDateToInput = (date) => {
    const newDate = new Date(date)
    const timeZone = 'Europe/Berlin'
    const zonedDate = utcToZonedTime(newDate, timeZone)

    return format(zonedDate, 'yyyy-MM-dd');
}

module.exports = { formatDateToInput };