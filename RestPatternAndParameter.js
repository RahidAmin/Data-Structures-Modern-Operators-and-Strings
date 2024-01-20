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
    },
    orderKacchi:function(ingidigant1,...others)
    {
      console.log(ingidigant1)
      console.log(others);
    }
}

restaurant.orderKacchi('beef','mutton','alu','kismis');


const arr=[1,2,3,4,5,6,7,8,9,10];

const[a,b,...others]=arr;
console.log(a,b,others);

const[pizza,burger,...others1]=[...restaurant.mainManu,...restaurant.starterManu];

console.log(pizza,burger,others1);

//rest with objects

const {sun,...weekdays}=restaurant.openingHours;
console.log(weekdays);

//function

const myFunctio=function(...obj){

   let sum=0;
  for(let i=0;i<obj.length;i++)
  {
    sum=obj[i]+sum;
  }console.log(sum);
}

myFunctio(1,2,3,4,5);

const x=[10,10,10];

myFunctio(...x);
