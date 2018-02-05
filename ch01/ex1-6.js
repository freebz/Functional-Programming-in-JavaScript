// 1.3 Benefits of functional programming

// 1.3.1 Encouraging the decomposition of complex tasks

var showStudent = compose(append('#student-info'), csv, find(db));

showStudent('444-44-4444');
