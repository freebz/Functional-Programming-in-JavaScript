// 7.3.1 Understanding memoization

// 7.3.2 Memoizing computationally intensive functions

var rot13 = s =>
   s.replace(/[a-zA-Z]/g, c =>
      String.fromCharCode((c <= 'Z' ? 90 : 122)
         >= (c = c.charCodeAt(0) + 13) ? c : c - 26));

	    



var rot13 = rot13.memoize();



var rot13 = (s =>
   s.replace(/[a-zA-Z/g, c =>
      String.fromCharCode((c <= 'Z' ? 90 : 122)
         >= (c = c.charCodeAt(0) + 13) ? c : c - 26))).memoize();
