function describe_car(made, model, ...args){
    this.made = made;
    this.model = model;
    this.color = args;
    this.feature = args;
    const car = new Object();
    car.made = made;
    car.model = model;
    car.color = args[0];
    car.feature = args[1];
    return car;
}
console.log(describe_car('honda', '2020', 'black-gray', 'Automatic'))