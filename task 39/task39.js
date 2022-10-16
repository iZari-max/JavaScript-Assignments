let cities = ['islamabad', 'washington DC', 'dehli'];
let countries = ['pakistan', 'america', 'india'];
function city_country(city, country){
    this.city=city;
    this.country;
    for(let i=0; i<city.length; i++){
        console.log(`${city[i]}, ${country[i]}`);
    }
}
city_country(cities, countries);
