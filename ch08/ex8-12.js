// 8.4.3 RxJS and promises
Rx.Observable.fromPromise(getJSON('/students'))
    .map(R.sortBy(R.compose(R.toLower, R.prop('firstname'))))
    .flatMapLatest(student => Rx.Observable.from(student))
    .filter(R.pathEq(['address', 'country'], 'US'))
    .subscribe(
	student => console.log(student.fullname),
	err => console.log(err)
    );
// -> Alonzo Church
//    Haskell Curry
