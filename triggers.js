/**
 * Creates a time-driven triggers.
 */
function createMinuteTrigger(functionName, minutes) {
 
  ScriptApp.newTrigger(functionName)
      .timeBased()
      .everyMinutes(minutes)
      .create();
}


/**
 * Deletes a trigger.
 * @param {string} functionName The handler function.
 */
function deleteTrigger(functionName) {
  // Loop over all triggers.
  var allTriggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < allTriggers.length; i++) {
    // If the current trigger is the correct one, delete it.
    if (allTriggers[i].getHandlerFunction() === functionName) {
      ScriptApp.deleteTrigger(allTriggers[i]);
    }
  }
}

