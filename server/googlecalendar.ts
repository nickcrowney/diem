const { google } = require('googleapis');
require('dotenv').config();

const calendarId = process.env.CALENDAR_ID;
const CLIENTEMAIL = process.env.CLIENTEMAIL;
const PRIVATEKEY = process.env.PRIVATEKEY;
// const CREDENTIALS = JSON.parse(process.env.CREDENTIALS)
const SCOPES = 'https://www.googleapis.com/auth/calendar';
const calendar = google.calendar({ version: 'v3' });

const auth = new google.auth.JWT(CLIENTEMAIL, null, PRIVATEKEY, SCOPES);

const insertEvent = async (event: any) => {
  let event2 = {
    summary: event.title,
    start: {
      date: event.date,
    },
    end: {
      date: event.date,
    },
  };
  try {
    let response = await calendar.events.insert({
      auth: auth,
      calendarId: calendarId,
      resource: event2,
    });
    if (response['status'] == 200 && response['statusText'] === 'OK') {
      return 1;
    } else {
      return 0;
    }
  } catch (error) {
    console.log(`Error at insertEvent --> ${error}`);
    return 0;
  }
};

export default insertEvent;
