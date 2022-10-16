let places = new Array(5);
places = ['paris', 'india', 'antartica', 'pacific islands', 'safari'];
console.log('Original');
console.log(places);
let sortedPlaces = [...places];
console.log('\nAlphabetically sorted')
console.log(sortedPlaces.sort());
console.log('Still Original');
console.log(places);
console.log('\nReversed Alphabetically sorted')
console.log(sortedPlaces.reverse());
console.log('Still Original');
console.log(places);
console.log('\nReversed-Reversed Alphabetically sorted')
console.log(sortedPlaces.reverse());
console.log('\nReversed-Reversed and again reversed Alphabetically sorted')
console.log(sortedPlaces.reverse());
console.log('Still Original');
console.log(places);
