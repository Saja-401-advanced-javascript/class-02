'use strict';


class Validate {
    constructor(input, rules) {
        this.input
        this.rules
    };

    isValid(input, rules) {
        return rules(input)
    }

    isTruthy(input) {
        if (input) {
            return true
        }
    };

    correctType(input) {
        let dataType = ['string', 'number', 'object', 'boolean', 'function'];
        for (let i = 0; i < dataType.length; i++) {
            if (typeof input == dataType[i]) {
                return true
            }
        }

    }
}

class Person extends Validate {
    constructor(input) {
        super(input)
        this.firstName = input.firstName;
        this.lastName = input.lastName;
        this.hair = input.hair;
        this.favoriteFoods = input.favoriteFoods
        this.married = input.married;
        this.kids = input.kids;
    }
}

module.exports = { Validate, Person };