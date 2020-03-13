const baseUrl = 'https://www.googleapis.com/calendar/v3/calendars/'
 , calendarIds = [
   {
     id: 'ntucenterprise.sg_32313338393839313338@resource.calendar.google.com',
     description: 'matungou1'
   }
 ]
 , resource = '/events'
 , apiKey = process.env.GOOGLE_API_KEY;

// baseUrl: 'http://httpbin.org/get'

module.exports = { baseUrl, calendarIds, resource, apiKey };
