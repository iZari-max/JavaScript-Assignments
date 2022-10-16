let magicians = ['taldback', 'neighr', 'jack'];
magicians.forEach((mag, index) =>{
    magicians[index]=' The Great' + mag;
} 
);
for(let i in magicians){
    console.log(magicians[i]);
}
