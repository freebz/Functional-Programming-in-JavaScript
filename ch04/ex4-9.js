// 4.4 Partial application and parameter binding

const consoleLog = _.partial(logger, 'console', 'json', 'FJS Partial');



const consoleInfoLog = _.partial(consoleLog, 'INFO');
consoleInfoLog('INFO logger configured with partial');



const log = _.bind(logger, undefined, 'console', 'json', 'FJS Binding');
log('WARN', 'FP is too awesome!');
