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
    }
}

 restaurant.orderDelivery({
    time:'20:30',
    location:'mirpur',
    starterIndex:2,
    mainIndex:3
 });









//When you have to dealing with 3rd party data..

const {restaurantName,categories,openingHours}=restaurant;
console.log(restaurantName,categories,openingHours);

const{restaurantName:myRestaurantName,openingHours:hours,categories:tags}=restaurant;   
console.log(myRestaurantName,tags,hours);

//way to setting a default value

const {manu=[],starterManu:starter=[]}=restaurant;
console.log(manu,starter);

//mutation variables

let x=1000;
let y=2000;

let obj={x:10,y:20,z:30};

({x,y}=obj);
console.log(x,y);

//nested objects

// const {sun:{open,close}}=openingHours;
const {sun:{open:o,close:c}}=openingHours;       //change the variable name
// console.log(open,close);
console.log(o,c);

