function make_album(singer, date, name, num){
    this.artist = singer;
    this.release = date;
    this.name = name;
    this.track = num;
    const album = new Object();
    album.artist= singer;
    album.release= date;
    album.name=name;
    album.track=num;
    return album;
}
console.log(make_album('The Weekend', '2018', 'Starboy album', 5));
console.log(make_album('Alan walker', '2016', 'FADED album', 8));
console.log(make_album('MaxMillan', '2020', 'Beautiful Scars album', 4));