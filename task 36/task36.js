function make_shirt(n, m){
    this.n=n;
    this.m=m;
    console.log(`this is the size of the shirt: ${n}METERS and this is the message "${m}"`);
}
make_shirt(15, 'TEST MESSAGE');