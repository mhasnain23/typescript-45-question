function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    options.forEach(function (option) {
        var _a = Object.entries(option)[0], key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
//Call the function with required information and additional options
var myCar = createCar("Toyota", "Corolla", { color: "blue" }, { hasSunroof: true });
console.log(myCar);
