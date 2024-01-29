'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


document.querySelector('button').addEventListener('click',function()
{
    const text=document.querySelector('textarea').value;
    const rows=text.split('\n');

    for(const [i,row] of rows.entries())
    {
        const[first,second]=row.toLowerCase().trim().split('_');
        const outPut=`${first[0].toUpperCase()+first.slice(1)}${second.replace(second[0],second[0].toUpperCase())}`;
        console.log(`${outPut.padEnd(20)}${'🚓'.repeat(i+1)}`);
    }

});

