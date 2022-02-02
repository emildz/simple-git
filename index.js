const { response } = require("express");
const express = require("express");

const app = express();

const cars = [
  { make: "Tesla", year: "2023", model: "X"},
  { make: "mercedes", year: "2022", model: "G-wagon"},
  { make: "nissan", year: "2025", model: "rogue"},
  { make: "audi", year: "2008", model: "a8"},
  { make: "gmc", year: "2022", model: "yukon"},
];

// get all cars
app.get('/', (request, response) => {
    response.send(cars)
})

//get only my future audi
app.get('/car/:carId',(request, response) => {
   console.log('this is my request.params =======>>>>>>', request.params)

// extracting carId from request.params    
    const { carId } = request.params
    response.send(cars[carId].make)
})

app.listen(3000, () => {
  console.log("Im Here!");
});
 




//this is just a comment 