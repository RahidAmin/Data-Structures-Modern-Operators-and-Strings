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
if(restaurant.openingHours.fri)
{
    console.log(restaurant.openingHours.fri.open);
}
if(restaurant.openingHours.sun)
{
    console.log(restaurant.openingHours.sun.open);
}

//Optional Chaining
console.log(restaurant.openingHours.mon?.open);

const days=['sat','sun','mon','tue','wed','thu','fri'];

for(const item of days)
{
   const open=restaurant.openingHours[item]?.open??"closed";
   const close=restaurant.openingHours[item]?.close??"closed";
   console.log(`${item} day Opens at:${open} and close at:${close}`);
}

//method
console.log(restaurant.order?.(1,2)??"Method is not exist..");
console.log(restaurant.order12?.(1,2)??"Method is not exist..");

//Array

const user=[
    {
        name:"Rahid",
        id:19
    }
]
console.log(user[0]?.name??"User Array empty")
