let age = 99;
if(age<2){
    console.log('baby stage');
}
else if(age>=2 && age <4){
    console.log('toddler stage');
}
else if(age>=4 && age <13){
    console.log('kid stage');
}
else if(age>=13 && age <20){
    console.log('tennage stage');
}
else if(age>=20 && age <65){
    console.log('adult stage');
}
else if(age>65){
    console.log('elder stage');
}
else{
    console.log('invalid age number');
}