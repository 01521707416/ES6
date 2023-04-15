/* Function Declaration */
function add(first, second) {
    const total = first + second;
    return total;
}

/* Function Expression */
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

/* Function Expression with Anonymous Function */
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

/* Arrow Function */
const product = (first, second) => first * second;
const result = product(6, 9)
console.log(result)

const fullName = (first, last) => first + ' ' + last;
const name = fullName('Khalequzzaman', 'Ansary')
console.log(name)

/* No parameter arrow function */
const pie = () => 3.1416;

/* Multi Arrow Function */
const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const product = firstSum * secondSum;
    const result = product / 2;
    return result;
}
