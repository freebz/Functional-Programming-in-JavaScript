// 2.2 Functional vs. object-oriented programming

get fullname() {
    return [this._firstname, this._lastname].join(' ');
}



var fullname =
    person => [person.firstname, person.lastname].join(' ');



var person = new Student('Alonzo', 'Church', '444-44-4444', 'Princeton');
p.fullname; //-> Alonzo Church
