// //Question 79: Creating and Accessing Object Properties: Construct an object representing a car with properties for make, model, and year. Then, show how you can access the model property of the car.
// Explain & TIP: Objects are collections of properties, kind of like a box for storing related information. You can create an object to group related data and access its properties using either dot notation or bracket notation.
//solution
//Construct an object representing a car with properties for make, model, and year.
var car_object = {
    make: "Honda",
    model: "Accord Sdn",
    year: "2013"
};
console.log(car_object); //shows complete object
//but a single property can be accessed as:-
//let suppose we want to access the model property of the car.
console.log(car_object.model);
console.log(car_object.make);
//AUTHOR_HUMA MOHSIN
