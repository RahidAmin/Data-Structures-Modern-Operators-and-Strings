'use strict';

const airLine='Biman Bangladesh Airlines';
const plane='A340B';
console.log(plane[0]);
console.log('B4F9'[2]);
console.log('B4F9'.length);
console.log(airLine.indexOf('n'));
console.log(airLine.lastIndexOf('n'));
console.log(airLine.indexOf('Bangladesh'));
console.log(airLine.slice(3));
console.log(airLine.slice(6,10));
console.log(airLine.slice(0,airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ')+1));
console.log(airLine.slice(-3));
console.log(airLine.slice(1,-1));


const checkMiddleSeat=function(seat)
{
    //B and E are moddle seat
    if(seat.slice(-1)==='B'|| seat.slice(-1)==='E')console.log("You have got middle seat");
    else{
        console.log("You are lucky");
    }
    

}

checkMiddleSeat('FAB');
checkMiddleSeat('AGE');
checkMiddleSeat('ABD');


//---------Part 2

const airLine2="Fly Emirates Dubai";
console.log(airLine2.toLowerCase());
console.log(airLine2.toUpperCase());
console.log('Rahid'.toUpperCase());

//--Fix Capitalization in name;

const passenger='rAhId';
const passengerLower=passenger.toLowerCase();
const passengerCurrectName=passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCurrectName);

//---Comparing emails

const email='rahidamin@gamil.com';
const logInEmail=' RahiDAmIN@Gmail.com \n';
// const lowerEmail=email.toLowerCase()
// const trimEmail=lowerEmail.trim();

const normalizedEmail=logInEmail.toLowerCase().trim();

console.log(normalizedEmail);

const priceUS='19,19$';
const priceBD=priceUS.replace('$','/=').replace(',','.');
console.log(priceBD);


const announcement='All passengers come to door 23,bording door 23';
console.log(announcement.replace('door','gate'));

console.log(announcement.replace(/door/g,'gate'));  //   '/door/g' is a regular expression


///Booleans

const plane1='AirBus A20B30';
console.log(plane1.includes('Bus'));
console.log(plane1.includes('Boin'));
console.log(plane1.startsWith('A'));

if(plane1.startsWith('AirBus') && plane1.endsWith(30))
{
    console.log('Part of the new airbus family')
}


const checkBaggage=function(item)
{
   const baggage=item.toLowerCase();
   if(baggage.includes('knif') || baggage.includes('gun'))
   {
    console.log('Does not allow to travel');
   }
   else{
    console.log('You can travel')
   }
}

checkBaggage('I have clothes,chocklates and food');
checkBaggage('I have socks,shoes and shoe');
checkBaggage('I have a knif ,food and book');
checkBaggage('I have a gun and some foods');

//------------Part 3

console.log('a+very+nice+String'.split('+'));
// console.log('Md Rahid Amin'.split(" "));
const[firstName,middleName,lastName]='Md Rahid Amin'.split(" ");
console.log(firstName,middleName,lastName)

const fullName=['Md',middleName,lastName.toUpperCase()].join(' ');
console.log(fullName)

const capitalizeName=function(name)
{
    const name1=name.toLowerCase();
    const names=name1.split(' ');
    const namesUpperArr=[];
    for(const n of names)
    {
       // namesUpperArr.push(n[0].toUpperCase()+n.slice(1));

        namesUpperArr.push(n.replace(n[0],n[0].toUpperCase()));
    }
    console.log(namesUpperArr.join(' '))
}

capitalizeName('md rahid amin');
capitalizeName('md RahiD amin sidDique RiVEN')

//padding
const message='this is md rahid amin';
console.log(message.padStart(25,'+').padEnd(30,'-'));
console.log('Rahid'.padStart(20,'+'));
console.log('amin'.padEnd(20,'+'));

//Mask Credit Card

const maskCreditCard=function(number)
{
    // const number1=String(number);
    const number1=number+'';
    const last=number1.slice(-4);
    console.log(last.padStart(number1.length,'*'));
}

maskCreditCard(1234567891011)
maskCreditCard(874958596698398);

//Repeat
const message1=`Bad Weather..All Departure will Delayed \n`;
                
    console.log(message1.repeat(10))

const planesInLine=function(number)
{
  console.log(`There are ${number} planes in line:${'🛬'.repeat(number)}`)
}
planesInLine(10);