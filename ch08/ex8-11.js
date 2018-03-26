// 8.4.2 Functional and reactive programming

Rx.Observable.of(1,2,3,4,5)
    .filter(x => x%2 !== 0)
    .map(x => x * x)
    .subscribe(x => console.log(`Next: ${x}`));

/*
//-> Next: 1
     Next: 9
     Next: 25
*/



document.querySelector('#student-ssn')
    .addEventListener('change', function (event) {
	let value = event.target.value;
	value = value.replace(/^\s*|\-|s*$/g, '');
	console.log(value.length !== 9 ? 'Invalid' : 'Valid'));
});
//-> 444          Invalid
//-> 444-44-4444  Valid



Rx.Observable.fromEvent(
    document.querySelector('#student-ssn'), 'change')

    .map(x => x.target.value)

    .map(cleanInput)

    .map(checkLengthSsn)

    .subscribe(

	ssn => ssn.isRight ? console.log('Valid') : console.log('Invalid'));
