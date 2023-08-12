// const a = {
//     name: 'Andrei'
// }
// const b = a
// const c = a
// console.log(b===c)

class Car {
    constructor(brand) {
        this.brand = brand
        this.state = {}
    }

    engine() {
        console.log(`${this.brand} is started`)
    }

    power() {
        console.log(`power ${this.brand} 300hp`)
    }
}

const car1 = new Car('bmw')
const car2 = new Car('audi')
console.log(Car.prototype)
console.log(car1.__proto__)
console.log(car1.__proto__ === car2.__proto__)

class SuperCar extends Car {
    constructor(brand, model) {
        super(brand)
        this.model = model
    }
}

const car3 = new SuperCar('lexus', 'LFA')

console.log(car3)