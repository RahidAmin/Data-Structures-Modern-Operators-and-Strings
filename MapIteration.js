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

const question=new Map([
   ['question','What is the best programming language in the world'],
   [1,'C'],[2,'Java'],[3,'JavaScript'],['currect',3],[true,'Currect👄'],[false,"Try Again"]

]);
console.log(question);

console.log(question.get(3));
console.log(question.get('currect'));

//Convert object to Map

const mapRestaurant=new Map(Object.entries(openingHours));
console.log(mapRestaurant)

//Quiz app
console.log(question.get('question'));
for(const [key,value] of question)
{
  if(typeof key === 'number')
  {
    console.log(`Answer ${key}:${value}`);
  }
}

const answer=Number(prompt("Your Answer: "));

// if(answer===3)
// {
//     console.log(question.get(true));
// }
// else{
//     console.log(question.get(false));
// }

console.log(question.get(question.get('currect')===answer))

console.log([...question]);
// console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);