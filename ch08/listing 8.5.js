// Listing 8.5  Promisifying getJSON

var getJSON = function (url) {
    return new Promise(function(resolve, reject) {
	let req = new XMLHttpRequest();
	req.responseType = 'json';
	req.open('GET', url);
	req.onload = function() {
	    if(req.status == 200) {
		let data = JSON.parse(req.responseText);
		resolve(data);
	    }
	    else {
		reject(new Error(req.statusText));
	    }
	};
	req.onerror = function () {
	    if(reject) {
		reject(new Error('IO Error'));
	    }
	};
	req.send();
    });
};
