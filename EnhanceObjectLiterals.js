'use strict';

const weekDays=['sat','sun','mon','tue','wed','thu','fri'];

const openingHours={
 [weekDays[1]]:{
     open:12,
     close:22
 },
 [weekDays[2]]:{
     open:13,
     close: 23
 },
 [weekDays[3]]:{
     open:14,
     close:24
 },
[`Day:${4=2}`]:{
    open:1,
    close:11

}}
 
const restaurant={
    restaurantName:"Food Stall",
    location:"Mirpur 2",
    categories:['Itanial','Chainese','Vegetarian','Organic'],
    starterManu:['Soup','Cold Drinks','Juice','Chocolate'],
    mainManu:['Pizza','Burger','Beef','Mutton'],

    // openingHours:openingHours,

    //Object literals
    openingHours,

   //object literals
    order(starterIndex,mainIndex)
    {
      
       return [this.starterManu[starterIndex],this.mainManu[mainIndex]];
    },

     orderDelivery({starterIndex,mainIndex,location,time})  
    {
        console.log(`${this.starterManu[starterIndex]} and ${this.mainManu[mainIndex]} will deliver ${location} at ${time}`);
    }
}
console.log(restaurant);
