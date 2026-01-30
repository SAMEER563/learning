
// Create function inside an object

let user = {
    name: "Ramu",
    age: 30,
    email: "ramu@example.com",
    greet: function() {
        console.log("Hello " + user.name);
        return 20;
    }
}

let vl = user.greet();  
console.log(vl);  // Output: 20

// why we use 'this' keyword
let user2 = {
    name: "Shyam",
    age: 30,
    email: "ramu@example.com",
    greet: function() {
        console.log("Hello " + this.name);  // 'this' refers to the current object
    }
}

user2.greet();  // Output: Hello Shyam
// 'this' is useful when the object name is not known or may change

