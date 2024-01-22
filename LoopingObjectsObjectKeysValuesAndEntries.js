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
 [`days:${2+3}`]:{
     open:11,
     close:21
 }
}
 
const restaurant={
    restaurantName:"Food Stall",
    location:"Mirpur 2",
    categories:['Itanial','Chainese','Vegetarian','Organic'],
    starterManu:['Soup','Cold Drinks','Juice','Chocolate'],
    mainManu:['Pizza','Burger','Beef','Mutton'],

    openingHours,

    order(starterIndex,mainIndex)
    {
      
       return [this.starterManu[starterIndex],this.mainManu[mainIndex]];
    },

     orderDelivery({starterIndex,mainIndex,location,time})  
    {
        console.log(`${this.starterManu[starterIndex]} and ${this.mainManu[mainIndex]} will deliver ${location} at ${time}`);
    }
}



// for(const day of Object.keys(openingHours))
// {
//     console.log(day)
// }

const days=Object.keys(openingHours);
let openSrt=`We are opening ${days.length} Days:`

for(const item of days)
{
    openSrt=openSrt+`${item},`;
}
console.log(openSrt);

//property value
const values=Object.values(openingHours);
console.log(values);

//entire object
 const entrie=Object.entries(openingHours);
//  console.log(entrie)

//[key,value]
for(const [key,{open,close}] of entrie)
{
    console.log(`On ${key} day open at ${open} and close at ${close}`);
}