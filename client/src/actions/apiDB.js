
export function getCars(arrayDb, arrayOut){
  console.log("getCars");
  arrayDb.forEach(function(element) {
    console.log(element.attributes.carId);
    //arrayOut.push(element.attributes.carId);
  });
}

export function getCar(array, carId){
  console.log("getCar");
  array.forEach(function(element) {
    if(element.attributes.carId == carId){
      console.log(element.attributes.carId);
    }
  });
}

