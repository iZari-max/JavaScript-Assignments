let n='l';
function make_shirt(n,m){
    this.n=n;
    this.m=m;
    
    if(n==='l'){
        console.log('DEFAULT LARGE SHIRT, i love JavaScript');
     }
    else if(n==='m'){
        console.log('DEFAULT MEDIUM SHIRT, i love JavaScript');
    }
    else{
         console.log(`this is a CUSTOM shirt: ${n}METERS and this is the message "${m}"`);
     }
    
}
make_shirt(n);
n='m';
make_shirt(n);
n=15;
make_shirt(n, 'CUSTOM MESSAGE');