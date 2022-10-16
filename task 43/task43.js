let magicians = ['taldback', 'neighr', 'jack'];
for(let i in magicians){
    console.log(magicians[i]);
}
let great_magicians;
magicians.forEach((mag, index) =>{
    magicians[index]='The Great ' + mag;
    great_magicians = magicians;
} 
);
for(let i in great_magicians){
    console.log(magicians[i]);
}
