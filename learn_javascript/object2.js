
// Create function inside an object

let user = {
    name: "Ramu",
    age: 30,
    email: "ramu@example.com",
    greet: function() {
        console.log("Hello");
        return 20;
    }
}

let vl = user.greet();  
console.log(vl);  // Output: 20