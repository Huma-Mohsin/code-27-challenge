// //Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.
// Explain & TIP: You can add new properties to an object or change existing ones after the object is created. This flexibility allows objects to be dynamically updated as needed.
//solution
//Assuming a previous object i.e car_object
interface car{
    make:string,
    model:string,
    year:string;
    color?:string
}
let car_object:car={
    
    make:"Ford",
    year:"2013",
    model:"Fusion",

};
console.log(car_object);//shows object

//Add a property named color to the existing car object

car_object.color = "blue";

//update year property as

car_object.year="2021"

console.log(car_object);//log modifies object.

//Author-Huma Mohsin
