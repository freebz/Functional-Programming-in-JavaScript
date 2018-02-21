// Listing 4.3  Using tuples for the isValid function

// trim :: String -> String
const trim = (str) => str.replace(/^\s*|\s*$/g, '');

// normalize :: String -> String
const normalize = (str) => str.replace(/\-/g, '');

// isValid :: String -> Status
const isValid = function (str) {
    if(str.length === 0){
	return new Status(false,
			  'Invalid input. Expected non-empty value!');
    }
    else {
	return new Status(true, 'Success!');
    }
}

isValid(normalize(trim('444-44-4444'))); //-> {true, 'Success!'}
