let user = {
    name: "Ramu",
    age: 30,
    email: "ramu@example.com",
}

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

console.log(user)