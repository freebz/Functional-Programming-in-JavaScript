// 5.3.3 Interacting with external resources using the IO monad

IO.of('An unsafe operation').map(alert);



const read = function(document, id) {
    return document.querySelector(`\#${id}`).innerHTML;
}

const write = function(document, id, val) {
    document.querySelector(`\#${id}`).innerHTML = value;
};



const read = function (document, id) {
    return function () {
	return document.querySelector(`\#{id}`).innerHTML;
    };
};

const write = function(document, id) {
    return function(val) {
	return document.querySelector(`\#{id}`).innerHTML = val;
    };
};



const readDom = _.partial(read, document);
const writeDom = _.partial(write, document);



<div id="student-name">alonzo church</div>

const changeToStartCase =
    IO.from(readDom('student-name')).
    map(_.startCase).
    map(writeDom('student-name'));



<div id="student-name">Clonzo Church</div>
