// Listing 8.8  find function using the browser's local store

// find :: DB, String -> Promise(Student)
const find = function (db, ssn) {
    let trans = db.transaction(['students'], 'readonly');
    const store = trans.objectStore('students');
    return new Promise(function(resolve, reject) {
	let request = store.get(ssn);
	request.onerror = function() {
	    if(reject) {
		reject(new Error('Student not found!'));
	    }
	};
	request.onsuccess = function() {
	    resolve(request.result);
	};
    });
};
