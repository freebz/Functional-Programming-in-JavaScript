// Listing 1.5  Programming with function chains

_.chain(enrollment)
    .filter(student => student.enrolled > 1)
    .pluck('grade')
    .average()
    .value(); //-> 90
