// Listing 4.9  Computing the smartest student

const smartestStudent = R.compose(
    R.head,
    R.pluck(0),
    R.reverse,
    R.sortBy(R.prop(1)),
    R.zip);

smartestStudent(students, grades); //-> 'Turing'
