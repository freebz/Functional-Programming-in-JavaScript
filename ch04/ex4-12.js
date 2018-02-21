// 4.5 Composing function pipelines

// 4.5.1 Understanding composition with HTML widgets

const Node = Tuple(Object, Tuple);



const element = R.curry(function(val, tuple) {
    return new Node(val, tuple);
});



var grades = element(1, element(2, element(3, element(4, null))));
