const {google} = require('googleapis');
const calendar = google.calendar('v3');

async function listEvents(auth) {
  const calendarId = 'primary';
  const res = await calendar.events.list({
    calendarId: calendarId,
    auth: auth
  });
  console.log(`Eventos en tu calendario ${calendarId}:`);
  res.data.items.forEach((item) => {
    console.log(`${item.summary}: ${item.start.dateTime || item.start.date}`);
  });
}
