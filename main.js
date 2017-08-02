(function(){
'use strict';
//////////////////////////////
// 1.
// var newArray = [];

var priceList = items.map(function(item){
  return item.price;
})
priceList = priceList.reduce(function(priceA, priceB){
  return priceA + priceB;
})
priceList /= items.length;
priceList = priceList.toFixed(2);
console.log(priceList);

// items.forEach(function(item){
//   newArray.push(item.price)
// });

// for(var i = 0; i < items.length; i++){
//   var price = items[i].price;
//   newArray.push(price);
// }
// console.log(newArray);
//
// var total = newArray.reduce(function(total, price){
//   return total + price;
// });
// console.log(total);
//
// var average = newArray.reduce(function(average, price){
//   return total / newArray.length;
// });
// console.log(average.toFixed(2));

///////////////////////////////
// 2.

var secondArray = [];

items.forEach(function(item){
    if(item.price > 14.00 && item.price < 18.00){
    return secondArray.push(item.title);
    }
  });
console.log(secondArray);

///////////////////////////////
// 3.

var moneyArray = [];

items.forEach(function(item){
  if(item.currency_code === 'GBP'){
    return moneyArray.push(item.title + ' costs ' + '£' + item.price);
  }
});
console.log(moneyArray);

///////////////////////////////
// 4.

var woodenArray = [];

items.forEach(function(item){
  if(item.materials.includes('wood')){
    return woodenArray.push(item.title)
  }
});
console.log(woodenArray);

//////////////////////////////
// 5.

var complexArray = [];

items.forEach(function(item){
  if(item.materials.length >= 8){
    return complexArray.push(item.title)
  }
});
console.log(complexArray);

///////////////////////////////

var selfMadeArray = [];

items.filter(function(item){
  if(item.who_made === 'i_did'){
    return selfMadeArray.push(item.title)
  }

});

console.log(

items.filter(function(item){
  return (item.who_made === 'i_did');
})
  .length + ' were made by their seller.'
);















}());
