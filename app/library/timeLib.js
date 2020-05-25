const moment = require('moment')
const momentZone = require('moment-timezone')
const timeZone = 'Asia/Calcutta'

let now = () => {
 return moment.utc().format()
}

let localTime = () => {

    return moment().tz(timeZone).format()
}

let convertToLocalTime = () => {

    return momentZone.tz(time, timeZone).format('LLLL')
}

module.exports = {
    now:now,
    localTime:localTime,
    convertToLocalTime:convertToLocalTime
}