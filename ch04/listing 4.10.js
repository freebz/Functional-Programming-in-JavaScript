// Listing 4.10  Using descriptive function aliases

const first = R.head;
const getName = R.pluck(0);
const reverse = R.reverse;
const sortByGrade = R.sortBy(R.prop(1));
const combine = R.zip;

R.compose(first, getName, reverse, sortByGrade, combine);
