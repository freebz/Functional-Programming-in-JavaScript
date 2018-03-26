// 8.4 Functional and reactive programming with RxJS

// 8.4.1 Data as observable sequences

Rx.Observable.range(1, 3)
    .subscribe(
	x => console.log(`Next: ${x}`),
	err => console.log(`Error: ${err}`),
	() => console.log('Completed')
    );

/*
Next: 1
Next: 2
Next: 3
Completed
*/



const squares = Rx.Observable.wrap(function* (n) {
    for(let i = 1; i <= n; i++) {
	return yield Rx.Observable.just(i * i);
    }
});

squares(3).subscribe(x => console.log(`Next: ${x}`));

/*
Next: 1
Next: 4
Next: 9
*/
