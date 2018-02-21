// 4.4.1 Extending the core language

// Take the first N characters
String.prototype.first = _.partial(String.prototype.substring, 0, _);

'Functional Programming'.first(3);; //-> 'Fun'

// Convert any name into a Last, First format
String.prototype.asName =
    _.partial(String.prototype.replace, /(\w+)\s(\w+)/, '$2, $1');

'Alonzo Church'.asName(); //-> 'Church, Alonzo'

// Converts a string into an array
String.prototype.explode =
    _.partial(String.prototype.match, /[\w]/gi);

'ABC'.explode(); //-> ['A', 'B', 'C']

// Parse a simple URL
String.prototype.parseUrl = _.partial(String.prototype.match,
/(http[s]?|ftp):\/\/([^:\/\s]+)\.([^:\/\s]{2,5})/);

'http://example.com'.parseUrl(); // -> ['http', 'example', 'com']



if(!String.prototype.explode) {
    String.prototype.explode = _.partial(String.prototype.match, /[\w]/gi);
}
