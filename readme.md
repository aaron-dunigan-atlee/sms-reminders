A simple app using Google Apps Script and the Twilio API to send reminders via SMS.
Set startDailyReminder() as a daily trigger, and the app will send a text reminder every 15 minutes until you reply 'yes' to confirm you did the thing you are being reminded of (take your medicine, walk the dog, find your car keys, ...).  Then it will remind you again the next day.