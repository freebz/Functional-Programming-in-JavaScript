// 5.1.3 Problems with null-checking

function getCountry(student) {
    let school = student.getSchool();
    if(school !== null) {
	let addr = school.getAddress();
	if(addr !== null) {
	    var country = addr.getCountry();
	    return country;
	}
	return null;
    }
    throw new Error('Error extracting country info');
}
