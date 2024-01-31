'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea=document.querySelector('textarea');
const btn=document.querySelector('button');

btn.addEventListener('click',function()
{
    
    const textValue=textArea.value.split('\n');
   
   
    
    for(const [h,i] of textValue.entries())
    {
        const [first,second]=i.split('_');
        const final=(first.toLowerCase()+second.replace(second[0],second[0].toUpperCase())).trim();
        console.log(`${final.padEnd(20)}${'🚒'.repeat(h+1)}`);
        
        
    }
    
    
})
