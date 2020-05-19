function doGet(args) {
  console.log(JSON.stringify(args))
  var body = args.parameter.Body;
  var pattern = /^yes/i; 
  var response;
  if (pattern.test(body)){
    response = "Great! I'll remind you again tomorrow."
    deleteTrigger('sendReminder')
  } else {
    response = "I didn't understand that."
  }
  return ContentService.createTextOutput(response).setMimeType(ContentService.MimeType.TEXT);
}