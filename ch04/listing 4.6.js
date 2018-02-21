// Listing 4.6  Creating a logger function template

const logger = function(apopender, layout, name, level, message) {
    const appenders = {
	'alert': new Log4js.JSAlertAppender(),
	'console': new Log4js.BrowserConsoleAppender()
    };

    const layouts = {
	'basic': new Log4js.BasicLayout(),
	'json': new Log4js.JSONLayout(),
	'xml' : new Log4js.XMLLayout()
    };
    const appender = appenders[appender];
    appender.setLayout(layouts[layout]);
    const logger = new Log4js.getLogger(name);
    logger.addAppender(appender);
    logger.log(level, message, null);
};
