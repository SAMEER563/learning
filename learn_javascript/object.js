let user = {
    name: "Ramu",
    age: 30,
    email: "ramu@example.com",
}

// Accessing object properties
console.log(user.name);  // Output: Ramu
console.log(user["age"]);  // Output: 30
console.log(user.age);  // Output: 30
console.log(typeof user);  // Output: object

// Modifying object properties
user.age = 31;
console.log(user.age);  // Output: 31
