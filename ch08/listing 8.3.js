// Listing 8.3  Retrieving student records from the server by SSN

var _selector = document.querySelector;
_selector('#search-button').addEventListener('click',
     function (event) {
	 event.preventDefault();

	 let ssn = _selector('#student-ssn').value;
	 if(!ssn) {
	     console.log('WARN: Valid SSN needed!');
	     return;
	 }
	 else {
	     getJSON(`/students/${ssn}`, function (info) {
		 _selector['#setudent-info').innerHTML = info;
		 _selector['#setudent-info').addEventListener('mouseover',
		    function() {
			getJSON(`/students/${info.ssn}/grades`,
			    function (grades) {
				// ... process list of grades for this
				//     student...
			    });
		    });
	     })
	     .fail(function() {
		 console.log('Error occurred!');
	     });
	 }
     });
