

const personValidator = require('../validator.js');
const data = require('../data/person.json');



let person = new personValidator.Person(data);


describe('validator module performs complex validations', () => {

  it('validates is the entity itself the right type (array, object, function etc)', () => {
    for (const key in person) {
      expect(person.correctType(key)).toBeTruthy();
    }
  });

  it('validates all “required” properties present and do they have values?', () => {
    expect(typeof person.firstName).toEqual('string');
    expect(typeof person.lastName).toEqual('string');
    expect(typeof person.hair).toEqual('object');
    expect(typeof person.married).toEqual('boolean');
    expect(typeof person.kids).toEqual('number');
    expect(Array.isArray(person.favoriteFoods)).toBeTruthy();
  });

  it('validates or any property that specifies a type, does the value match that type', () => {
    person.favoriteFoods.forEach(food => {
      expect(typeof food).toEqual('string');
    });

    for (const key in person.hair) {
      if (person.hair.hasOwnProperty(key)) {
        expect(typeof key).toEqual('string');
      }
    }
  });


});