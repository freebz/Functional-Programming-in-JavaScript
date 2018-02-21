// 4.3 Curried function evaluation

const name = curry2(function (last, first) {
    return new StringPair('Barkley', 'Rosser');
});

[first, last] = name('Curry')('Haskell').values();
first; //-> 'Curry'
last;  //-> 'Haskell;

name('Curry'); //-> Function



// checkType :: Type -> Type -> Type | TypeError
const checkType = curry2(function(typeDef, actualType) {
    if(R.is(typeDef, actualType)) {
	return actualType;
    }
    else {
	throw new TypeError('Type mismatch. Expected ['
			    + typeDef + '] but found ['
			    + typeof actualType + ']');
    }
});

checkType(String)('Curry');  //-> String
checkType(Number)(3);        //-> Number
checkType(Date)(new Date()); //-> Date
checkType(Object)({});       //-> Object
checkType(String)(42);       //-> Throws TypeError



// fullname :: (String, String) -> String
const fullname = function (first, last) {
    // ...
}



// fullname :: String -> String -> String
const fullname =
      function (first) {
	  return function (last) {
	      // ...
	  }
      }
