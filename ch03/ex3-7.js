// 3.3.4 Removing unwanted elements with _.filter

_(persons).filter(isValid).map(fullname);



const bornIn1903 = person => person.birthYear === 1903;

_(persons).filter(bornIn1903).map(fullname).join(' and ');

//-> 'Alonzo Church and Haskell Curry'



// ES7
[for (p of people) if (p.birthYear === 1903) p.fullname]
    .join(' and ');
