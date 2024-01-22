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

const manu=[...restaurant.mainManu,...restaurant.starterManu];

for(const item of manu)
{
    console.log(item);
}

for(const items of manu.entries())
{
    console.log(items);
}

for(const item of manu.entries())
{
    console.log(`${item[0]+1}:${item[1]}`)
}

for(const [i,el] of manu.entries())    ////Smart way 
{
    console.log(`${i+1}:${el}`);
}