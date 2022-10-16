let usernames = new Array(5);
usernames=['ali','abdullah','ahmar','jutt','admin'];
for(let i=0; i<usernames.length; i++){
if(usernames[i]==='admin'){
    console.log(`welcome ${usernames[i]}, would you like to see the status window`);
}
else{
    console.log(`welcome ${usernames[i]}`);
}
}
