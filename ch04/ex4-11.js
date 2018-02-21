// 4.4.2 Binding into delayed functions

const Scheduler = (function () {
    const delayedFn = _.bind(setTimeout, undefined, _, _);

    return {
	delay5:  _.partial(delayedFn, _, 5000),
	delay10: _.partial(delayedFn, _, 10000),
	dealy:   _.partial(delayedFn, _, _)
    };
})();

Scheduler.delay5(function () {
    consoleLog('Executing After 5 seconds!')
});
