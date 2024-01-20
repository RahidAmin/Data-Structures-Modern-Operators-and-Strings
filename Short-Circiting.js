'use strict';
const restaurant={
    restaurantName:"Food Stall",
    location:"Mirpur 2",
    categories:['Itanial','Chainese','Vegetarian','Organic'],
    starterManu:['Soup','Cold Drinks','Juice','Chocolate'],
    mainManu:['Pizza','Burger','Beef','Mutton'],
    
   openingHours:        ///nested object
   {
    sun:{
        open:12,
        close:22
    },
    mon:{
        open:13,
        close: 23
    },
    tue:{
        open:14,
        close:24
    }
    

   },
  

    order:function(starterIndex,mainIndex)
    {
       // return `${this.starterManu[starterIndex]},${this.mainManu[mainIndex]}`;
       return [this.starterManu[starterIndex],this.mainManu[mainIndex]];
    },

    orderDelivery:function({starterIndex,mainIndex,location,time})  //in parameter we can also use 'obj' variable
    {
        console.log(`${this.starterManu[starterIndex]} and ${this.mainManu[mainIndex]} will deliver ${location} at ${time}`);
    },
    orderKacchi:function(ingidigant1,...others)
    {
      console.log(ingidigant1)
      console.log(others);
    }
}

restaurant.numOfguests=19;

const guess=restaurant.numOfguests?null:10;
console.log(guess);

const guess2=restaurant.numOfguests||10;
console.log(guess2);

///------ "||"return truthy values and "&&" returns falsy value
console.log(10 || 'rahid');
console.log(0 || 'rahid');
console.log( 10 && 'rahid');
console.log(0 && 'rahid');

if(restaurant.orderKacchi)
{
    restaurant.orderKacchi('cold drinks','desert');
}

restaurant.orderKacchi && restaurant.orderKacchi('biri','cha');