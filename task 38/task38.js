let cities = ['islamabad', 'karachi', 'london'];
function describe_city(city, country = 'pakistan'){
    this.city=city;
    this.country=country;
    for(let i = 0 ; i<cities.length; i++){
        console.log(`${cities[i]} is the city of ${country}`);
    }
}
describe_city(cities);