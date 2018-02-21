// fetchStudentFromDb :: DB -> (String -> String)
const fetchStudentFromDb = R.curry(function (db, ssn) {
    return find(db, ssn);
});

// fetchStudentFromArray :: Array -> (String -> Student)
const fetchStudentFromArray = R.curry(function (arr, ssn) {
    return arr[ssn];
});



const findStudent = useDb ? fetchStudentFromDb(db)
                          : fetchStudentFromArray(arr);

findStudent('444-44-4444');
