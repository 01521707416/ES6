const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'Silver',
    weight: '2 KG',
    price: 1500,
}

/* Primary method
const fishName = fish.name;
const fishWeight = fish.weight;
console.log(fishName)
console.log(fishWeight) 
*/

/* Advanced Method */

const { name, address, color, price } = fish;
console.log(name, color, price)