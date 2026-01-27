// let user = {
//     name: "Ramu",
//     age: 30,
//     email: "ramu@example.com",
// }

// Accessing object properties

console.log(user.name);  // Output: Ramu
console.log(user["age"]);  // Output: 30  --- Need to give value as string
console.log(user.age);  // Output: 30
console.log(typeof user);  // Output: object

// Modifying object properties
user.age = 31;
console.log(user.age);  // Output: 31


// Adding new properties
user.address = "123 Main St";
console.log(user.address);  // Output: 123 Main St

user["phone number"] = "123-456-7890";  // Property name with space is given in quotes

// Deleting properties
delete user.email;
console.log(user.email);  // Output: undefined

// Displaying the keys and values of the object
console.log(Object.keys(user));  // Output: [ 'name', 'age', 'address', 'phone number' ]
console.log(Object.values(user));  // Output: [ 'Ramu', 31, '123 Main St', '123-456-7890' ]
console.log(Object.entries(user)); // Output: [ [ 'name', 'Ramu' ], [ 'age', 31 ], [ 'address', '123 Main St' ], [ 'phone number', '123-456-7890' ] ]

console.log(user)


let user = {
    name: "Ramu",
    age: 30,
    email: "ramu@example.com",
}

// use for...in loop to iterate over object properties
for (let key in user) {
    console.log(key + ": " + user[key]);
}
// Output:
// name: Ramu
// age: 30
// email:

// using destructuring to extract properties
let { name, age } = user;
console.log(name, age);  // Output: Ramu 30
