// const person = {
//     name: 'Andrew',
//     age: 43,
//     location: {
//         city: 'perth',
//         temp: 92
//     }
// };

// const {name = 'anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${name} is ${age}.`)

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}.`);
// }

// const address = ['1299 s juniper street', 'phili', 'pen', '12345'];

// const [street, city, state, zip] = address;

// console.log(`you are in ${street} ${city}`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2:75'];

const [it, small, medium, large] = item;

console.log(`a medium ${it} costs ${medium}`)
