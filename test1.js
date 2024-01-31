'use strict';

const flights=
'_Delayed_Departure;fao93766109;txl1233758440;11:23+_Arrival;bru0943384722;fao939320383;11:45+_Delayed_Arrival;hel3837299;fao93739374;12:05+_Departure;fao3830493;lis383494;12:39';

const getCode=srt=>srt.slice(0,3).toUpperCase();

for(const flight of flights.split('+'))
{
  const [type,from,to,time]=flight.split(';');
  const output=`${type.startsWith('_Delayed')?'😥':''} ${type.replaceAll('_',' ')} ${getCode(from)} to ${getCode(to)} (${time.replace(':','h')})`.padStart(50,'*');


   console.log(output);
}