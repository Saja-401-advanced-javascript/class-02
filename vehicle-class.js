
'use strict';

class Vehicle {
    constructor(name, wheels) {
        this.name = name;
        this.wheels = wheels;
    }

    drive() {
        return 'Moving Forward';
    };

    stop() {
        return 'Stopping';
    };
}

class Car extends Vehicle {
    drive() {
        super.name();
        super.wheels();
    }
}

class Motorcycle extends Vehicle {

    wheelie() {
        return 'Wheee!';
    }
    drive() {
        super.name();
        super.wheels();
    }
}



module.exports = {Car, Motorcycle};