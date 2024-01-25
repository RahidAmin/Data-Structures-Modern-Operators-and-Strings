'use strict';

const rest=new Map();

rest.set('name',"Rahid Hotel"); //set works as add
rest.set(1,'Dhap,Rangpur');
rest.set(2,"Mirpur Dhaka");
console.log(rest.set(2.1,1));

rest.set('Categoris',['Itanial','Chainese','Vegetarian','Organic']).set('open',11).set('close',23).set(true,"Hotel is open").set(false,'HOtel is closed');
console.log(rest.get('name'));
console.log(rest.get(true));

const time=21;

console.log(rest.get(time>rest.get('open') && time<rest.get('close'))); 
console.log(rest.has('Categoris'));
rest.delete(2);
console.log(rest);
console.log(rest.size);
// rest.clear();
// console.log(rest);

rest.set([1,2],'test');
console.log(rest.get[1,2]) //It will not work

const arr=[3,4];
rest.set(arr,'test2');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'),"Heading");