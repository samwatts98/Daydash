/* eslint-disable no-restricted-globals */
import moment from 'moment';

const TIME_FORMAT = 'HH:mm A';
const DATE_FORMAT = 'dddd, Do MMMM YYYY';

export const convertToMoment = (stringTime) => {
  if (stringTime) {
    return moment.utc(stringTime, 'H:mm:ss A').utcOffset(moment().utcOffset());
  }
  return null;
};

export const timeNow = (formatted) => {
  if (formatted) {
    return moment().format(TIME_FORMAT);
  }
  return moment();
};

export const dateNow = (formatted) => {
  if (formatted) {
    return moment().format(DATE_FORMAT);
  }
  return moment();
};


export const timeAs = (time) => (moment(time, TIME_FORMAT));

export const formatTimeEvent = (event, timeHappening, params) => {
  if (timeHappening) {
    const inMinutes = timeHappening.diff(timeNow(), 'minutes');
    if (isNaN(inMinutes)) {
      return `Unknown ${event}!`;
    }
    const hasHappened = inMinutes <= 0;

    if (params.justRelative) {
      return `${event} ${timeHappening.fromNow()}!`;
    }
    return `${event} ${hasHappened ? 'was' : 'is'} at ${
      moment(timeHappening).format(TIME_FORMAT)} (${timeHappening.fromNow()}!).`;
  }
  return null;
};

export const timeRelativeToEvent = (timeToday) => timeToday.diff(moment('12:01PM', 'HH:mmA'), 'minute');
