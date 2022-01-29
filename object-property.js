var computer = {
    price: 290000,
    Storage: '156gb',
    processor: 'intel i5',
    color: 'silver'

}
// set a object property value 

computer.price = 20000;
// console.log(computer)

// console.log(computer);
// console.log(computer.processor);
// var computerPrice = computer.price ;
// console.log(computerPrice);


// different ways to set a value  of an object property
var priceProperty = 'price';
computer.price = 20000;
// anoher
computer['price'] = 23000;
computer[priceProperty] = 1789000;



// another exaple
var StorageProperty = 'storage';
computer[StorageProperty] = "999gb";

// second 
computer['Storage'] = '1tb';
// firsnumnber
computer.Storage = '2tb';


console.log(computer);