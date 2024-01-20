'use strict';

const arr=[1,2,3];

const [x,y,z]=arr;  //destructuring (this is destructuring assignment not array)
console.log(x);
console.log(y);
console.log(z);


const restaurant={
     restaurantName:"Food Stall",
     location:"Mirpur 2",
     categories:['Itanial','Chainese','Vegetarian','Organic'],
     starterManu:['Soup','Cold Drinks','Juice','Chocolate'],
     mainManu:['Pizza','Burger','Beef','Mutton'],

     order:function(starterIndex,mainIndex)
     {
        // return `${this.starterManu[starterIndex]},${this.mainManu[mainIndex]}`;
        return [this.starterManu[starterIndex],this.mainManu[mainIndex]];
     }
}


let[first,second, ,fourth]=restaurant.categories;

console.log(first);
console.log(second);
console.log(fourth);

//switching variables
// const temp=first;

// first=fourth;

// fourth=temp;
[first,fourth]=[fourth,first];

console.log(first,fourth);

console.log(restaurant.order(1,2));

//receive 2 return values from a function
const [a,b]=restaurant.order(1,2);
console.log(a,b);


//important

//nested destructuring
const nested=[1,2,3,[4,5,6]];

const [d,e,f,[g,h,i]]=nested;
console.log(d,e,f,g,h,i);

//default values

const [p=1,q=1,r=1,s=1]=[3,6,9];
console.log(p,q,r,s);

