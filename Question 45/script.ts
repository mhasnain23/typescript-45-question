interface Car {
    manufacturer: string,
    model: string,
    [key: string]: any,
}

function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]): Car {
    const car: Car = {
        manufacturer,
        model,
    }
    options.forEach(option => {
        const [key, value] = Object.entries(option)[0];
        car[key] = value;
    });

    return car;
}

//Call the function with required information and additional options

const myCar = createCar("Toyota", "Corolla", { color: "blue" }, { hasSunroof: true });

console.log(myCar);