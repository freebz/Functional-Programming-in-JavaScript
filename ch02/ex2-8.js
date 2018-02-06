// 2.3.3 Types of function invocation

function doWork() {
    this.myVar = 'Some value';
}
doWork();



var obj = {
    prop: 'Some property',
    getProp: function () {return this.prop}
};
obj.getProp();



function MyType(arg) {
    this.prop = arg;
}

var someVal = new MyType('some argument');
