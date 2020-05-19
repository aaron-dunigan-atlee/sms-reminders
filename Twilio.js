// SMS send time limits between 8 a.m. and 9 p.m. in the time zone your recipient is in.
  
var twilioBaseUrl = 'https://api.twilio.com/2010-04-01/Accounts/'+ACCOUNT_SID

function sendSms(to,body) {
  var messages_url = twilioBaseUrl+'/Messages.json';

  var payload = {
    "To": to,
    "Body" : body,
    'From' : TWILIO_PHONE
  };

  var options = {
    "method" : "post",
    "payload" : payload,
    "muteHttpExceptions" : false
  };

  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode(ACCOUNT_SID+":"+AUTH_TOKEN)
  };
  var response = UrlFetchApp.fetch(messages_url, options);
  console.log(response)
  return response
}

