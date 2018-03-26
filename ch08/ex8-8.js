// 8.3.1 Generators and recursion

function* AllStudentsGenerator(){
    yield 'Church';

    yield 'Rosser';
    yield* RosserStudentGenerator();

    yield 'Turing';
    yield* TuringStudentGenerator();

    yield 'Kleene';
    yield* KleeneStudentGenerator();
}

function* RosserStudentGenerator(){
    yield 'Mendelson';
    yield 'Sacks';
}

function* TuringStudentGenerator(){
    yield 'Gandy';
    yield 'Sacks';
}

function* KleeneStudentGenerator(){
    yield 'Nelson';
    yield 'Constable';
}

for(let student of AllStudentsGenerator()){
    console.log(student);
}



function* TreeTraversal(node) {
    yield node.value;
    if (node.hasChildren()) {
	for(let child of node.children) {
	    yield* TreeTraversal(child);}
    }
}

var root = node(new Person('Alonzo', 'Church', '111-11-1231'));

for(let person of TreeTraversal(root)) {
    console.log(person.lastname);
}
