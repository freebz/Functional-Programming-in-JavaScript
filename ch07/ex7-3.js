// 7.2 Deferring execution using lazy evaluation

Maybe.of(student).getOrElse(createNewStudent());



if(!student) {
    return createNewStudent();
}
else {
    return student;
}
