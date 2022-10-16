let current_users = ['ali','abdullah','ahmar','jutt','burhan'];
let new_users = ['ALI','Saad','AhmAr','rafay','ashar'];
for(let i =0; i<new_users.length;i++){
    new_users[i] = new_users[i].toLowerCase();
}
for(let j=0; j<new_users.length;j++){
    for(let k=0; k<current_users.length;k++){
        if(new_users[j]===current_users[k]){
            console.log(`the username ${new_users[j]} is not available`);
            new_users.splice(j,1)
        }
    }
    console.log(`the username ${new_users[j]} is available`);
    
}
