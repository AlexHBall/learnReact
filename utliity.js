/**
 * @param {string} name
 */
function sayHello(name){
    return `Hello ${name}`;
}

const grades = [10, 2, 21, 35, 50, -10, 0, 1];

//get all grades > 20
const result = grades.filter(grade => grade > 20);