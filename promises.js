
// promise
function checkNumber(num)
{
    return new Promise ((resolve,reject)=>    
    {
        if(num > 10)
        {
            resolve("Greater");
        }
        else
        {
           reject("smaller or equal");
        }
    })
}

function display()
{
    const result = checkNumber(15);
     result.then((e)=>{console.log("promise completed",e)}) ;
     result.catch((e)=>{console.log("Error:",e)}) ;  
}
display();