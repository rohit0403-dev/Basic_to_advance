/**
 * Instruction: Given the array const arr = [1, 2, 3, 4, 5];, destructure the first two elements into separate variables a and b. Then, create a new array called rest containing the remaining elements.
 */

// const arr = [1, 2, 3, 4, 5];
// const [a, b] = arr;
// console.log(a, b)
// let rest = [...arr];
// console.log(rest)

/**
 * Instruction: Given two objects const obj1 = { name: "Alice" }; and const obj2 = { age: 25 };, create a new object that combines both obj1 and obj2.
 */
// const obj1 = { name: "Alice" };
// const obj2 = { age: 25 };
// const obj={...obj1,...obj2};
// console.log(obj)


/**
 * Instruction: Create a function multiply(a, b) that multiplies two numbers. If b is not provided, it should default to 2.
 */
// function multiply(a, b=2) {
//     console.log(a * b)
// }
// multiply(2,4)


/**
 * Create a function incrementAge() that increments the age property of an object person. This function should be impure (it should mutate the object passed in).
 */

// const person = { name: "Bob", age: 30 };
// function incrementAge(person) {
//     person.age = person.age + 1;
//     console.log(person)
// }
// incrementAge(person)
// incrementAge(person)
// incrementAge(person)
// incrementAge(person)


/**
 * Instruction: Write a function sum that takes any number of arguments and returns their sum using the   rest parameter syntax.
 */
function sum(...num) {
//  let sum=0;
//  for(let i=0;i<num.length;i++){
//     sum+=num[i]
//  }
//  console.log(sum)
// let sum=num.reduce((acc,item)=>acc+item);
// console.log(sum)
}

sum(1, 2, 3, 4, 5, 6)