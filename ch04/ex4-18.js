// 4.6.2 Tap (K-combinator)

tap :: (a -> *) -> a -> a



const debugLog = _.partial(logger, 'console', 'basic', 'MyLogger', 'DEBUG');



const debug = R.tap(debugLog);
const cleanInput = R.compose(normalize, debug, trim);
const isValidSsn = R.compose(debug, checkLengthSsn, debug, cleanInput);



isValidSsn('444-44-4444');

// output
MyLogger [DEBUG] 444-44-4444  // chean input
MyLogger [DEBUG] 444444444    // check length
MyLogger [DEBUG] true         // final result
