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

    orderPasta:function(ing1,ing2,ing3)
    {
      console.log(`Here is your pasta with ${ing1},${ing2} and ${ing3}`);
    }
}

const arr=[6,7,8,9];

const newArr=[...arr,1,2,3,4,5];
console.log(newArr);

//when we need to write individuals array

console.log(...newArr);


///adding new manu

const newManu=[...restaurant.mainManu,'alu vorta'];
const newManu1=['kacchi',...restaurant.mainManu];
console.log(newManu);

console.log(newManu1);

console.log(restaurant.mainManu)


///copy array
const mainManuCopy=[...restaurant.mainManu];

//join 2 arrays
const joinTwoArrays=[...restaurant.mainManu,...restaurant.starterManu];
console.log(joinTwoArrays);


//Iterables:
const myName="Rahid";
const myNameArr=[...myName, ,'Amin'];
console.log(myNameArr);

console.log(...myName);

const ingridiantsOfPasta=[prompt("Ingrideants 1: "),prompt("Ingrideants 1: "),prompt("Ingrideants 1: ")];

restaurant.orderPasta(...ingridiantsOfPasta);

//with objects

const newRestaurant={
    founder:'Rahid',
    ...restaurant,
    foundedIn:2024
}
console.log(newRestaurant);

//copy object

const copyRestaurant={...restaurant};
copyRestaurant.restaurantName="Sky Blue";
console.log(restaurant);
console.log(copyRestaurant);
