// 4.3.2 Implementing resuable function templates

const logger = new Log4js.getLogger('StudentEvents');
logger.info('Student added successfully!');



logger.addAppender(new Log4js.JSAlertAppender());



appender.setLayout(new Log4js.JSONLayout());



const log = R.curry(logger)('alert', 'json', 'FJS');

log('ERROR', 'Error condition detected!!');

// -> this wlll popup an alert dialog with the requested message



const logError = R.curry(logger)('console', 'basic', 'FJS', 'ERROR');
logError('Error code 404 detected!!');
logError('Error code 402 detected!!');
