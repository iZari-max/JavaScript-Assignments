let guests = ['ali',
'akbar',
'ahmar'];
console.log(guests[2]+ ' would not be able to attend the dinner ');
guests.splice(2,0,'osama');
for(let i=0; i<3; i++){
    console.log(`You are invited at dinner my brother ${guests[i]}`);
}
console.log('We just found a bigger table');
guests.unshift('abdullah');
guests.splice(3,0,'shayan');
guests.push('rayyan');
for(let i=0; i<guests.length; i++){
    console.log(`You are invited at dinner my brother ${guests[i]}`);
}
console.log('\n');
console.log('Sorry to inform you but the bigger table couldnt arrive, i can only invite to people for dinner');
for(let i=guests.length-1; i>1; i--){
    console.log(`Sorry i wont be able to invite you brother ${guests[i]}`);
    guests.splice(i,1);
}
console.log('\n');
for(let i=guests.length-1; i>=0; i--){
    console.log(`You are still invited for the dinner brother ${guests[i]}`);
    guests.splice(i,1);
}
console.log(guests);

