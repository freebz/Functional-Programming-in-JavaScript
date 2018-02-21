// 4.2.2 Functions and arity: the case for tuples

// isValid :: String -> Boolean
function isValid(str) {
    // ...
}

// makeAsyncHttp:: String, String, Array -> Boolean
function makeAsyncHttp (method, url, data) {
    // ...
}



isValid :: String -> (Boolean, String)

isValid('  444-444-4444'); //-> (false, 'Input is too long!')



return {
    status : false,
    message: 'Input is too long!'
};

return [false, 'Input is too long!'];



var t = (30, 60, 90)


var sumAnglesTriangle = t._1 + t._2 + t._3 = 180



const Status = Tuple(Boolean, String);
