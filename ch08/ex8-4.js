// 8.2 First-class asynchronous behavior with promises

Promise.of(<long computation>).map(fun1).map(fun2); //-> Promise(result)



var fetchData = new Promise(function (resolve, reject) {

    // fetch data async or run long-running computation

    if (<success>) {
	resolve(result);
    }
    else {
	reject(new Error('Error performing this operation!'));
    }
});



var Scheduler = (function () {
    let delayedFn = _.bind(setTimeout, undefined, _, _);

    return {
	delay5:  _.partial(delayedFn, _, 5000),
	delay10: _.partial(delayedFn, _, 10000),
	delay:   _.partial(delayedFn, _, _)
    };
})();

var promiseDemo = new Promise(function(resolve, reject) {
    Scheduler.delay(function () {
	resolve('Done!');
    });
});

promiseDemo.then(function(status) {
    console.log('After 5 seconds, the status is: ' + status);
});
