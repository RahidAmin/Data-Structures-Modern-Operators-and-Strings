'use strict';

const order=new Set([  //there is no key only values
    'kacchi',
    'khichuri',
    'buter dal',
    'beef',
    'kacchi',
    'khichuri'
]);

console.log(order);
console.log(new Set('rahidamin'));
console.log(order.size)  //.size for length of set

console.log(order.has('khichuri'));
order.delete('buter dal');
order.add('dim vuna');
console.log(order);
// order.clear();

for(const o of order)console.log(o);


//MOst Important
const arr=['engineer','doctor','engineer','doctor','pilot','army'];

const newSet=new Set(arr);
console.log(newSet);

// const arr1=[...newSet];
const arr1=[...new Set(newSet)];
console.log(arr1)

console.log(new Set(['engineer','doctor','engineer','doctor','pilot','army']).size);
