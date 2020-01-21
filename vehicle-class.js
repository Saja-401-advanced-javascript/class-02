
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
    constructor(name, wheels) {
        super(name,4);
      
    }
}

class Motorcycle extends Vehicle {

    wheelie() {
        return 'Wheee!';
    }
    constructor(name, wheels) {
        super(name,2);
      
    }
}



module.exports = {Car, Motorcycle};