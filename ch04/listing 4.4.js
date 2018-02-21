// Listing 4.4  StringPair type

const StringPair = Tuple(String, String);
const name = new StringPair('Barkley', 'Rosser');

[first, last] = name.values();
first; //-> 'Barkley'
last;  //-> 'Rosser'
