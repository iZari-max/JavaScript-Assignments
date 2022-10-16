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
for(let i=0; i<6; i++){
    console.log(`You are invited at dinner my brother ${guests[i]}`);
}