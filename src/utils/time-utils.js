import moment from 'moment';

const TIME_FORMAT = 'HH:mm A';

export const convertToMoment = (stringTime) => (
  moment.utc(stringTime, 'H:mm:ss A').utcOffset(moment().utcOffset())
);

export const timeNow = (formatted) => {
  if (formatted) {
    return moment().format(TIME_FORMAT);
  }
  return moment();
};

export const timeAs = (time) => (moment(time, TIME_FORMAT));

export const formatTimeEvent = (event, timeToday) => {
  if (timeToday) {
    const inMinutes = timeToday.diff(timeNow(), 'minutes');
    const hasHappened = inMinutes <= 0;

    return `${event} ${hasHappened ? 'was' : 'is'} at ${moment(timeToday).format(TIME_FORMAT)}. `
    + `${Math.abs(inMinutes)} minutes ${hasHappened ? 'ago!' : 'to go!'}`;
  }
  return '';
};

export const timeRelativeToEvent = (timeToday) => timeToday.diff(moment('12:01PM', 'HH:mmA'), 'minute');
