// //Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

// Explain & TIP: You can loop through each property of an object using a for...in loop. This is useful for when you need to examine or display all the information an object holds.

//solution
let student_details = {
  name: "HUMA MOHSIN",
  enrolled: ["GEN-AI", "AI ROBOTICS"],
  contac: 1234567,
  address: "House-245,Block XYZ",
  email: "huma@example.com",
};
function student(student_details) {
  console.log(`${student_details.name} has the following information`);
  console.log(student_details);
}

student(student_details);
//but according to the requirment of question,we have to make function just and by calling this function, we have to make an object having some keys and corrresponding to that keys some values are stored in it.
console.log("\n");
console.log("According To The Question's Requirement");


function To_Log_properties(car: object) {
  for (const item in car) {
    console.log(`${item}:${car[item]}`); //way to create an object, all values you entered during call set on this way.
  }
}
To_Log_properties({
  make: "Toyota",
  mode: "Camry",
  Year: "2013",
  Sterring_Type: "Rack & Pinion",
  Transmission: "5 speed manual",
  Fuel_Tank_Capacity: "55litres",
});
//Author-HUMA MOHSIN
