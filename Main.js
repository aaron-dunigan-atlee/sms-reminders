function sendReminder() {
  var body = REMINDER_MESSAGE + '\nReply YES to confirm.'
  sendSms(PHONE_NUMBER, body)
}

function startDailyReminder() {
  createMinuteTrigger('sendReminder', 15)
}