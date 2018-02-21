// 4.5.2 Functional composition: separating description from evaludation

const str = `We can only see a short distance
ahead but we can see plenty there
that needs to be done`;

const explode = (str) => str.split(/\s+/);

const count = (arr) => arr.length;

const countWords = R.compose(count, explode);

countWords(str); //-> 19



const trim = (str) => str.replace(/^\s*|\s*$/g, '');

const normalize = (str) => str.replace(/\-/g, '');

const validLength = (param, str) => str.length === param;

const checkLengthSsn = _.partial(validLength, 9);



const cleanInput = R.compose(normalize, trim);
const isValidSsn = R.compose(checkLengthSsn, cleanInput);

cleanInput(' 444-44-4444 ');  //-> '444444444'
isValidSsn(' 444-44-4444 ');  //-> true



Function.prototype.compose = R.compose;

const cleanInput = checkLengthSsn.compose(normalize).compose(trim);
