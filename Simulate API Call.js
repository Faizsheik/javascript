
function fetchUser()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const obj = {
                name: "Faiz",
                age: 22
            }
            resolve(obj);
        },2000);
    })
}

/*function display()
{
    const result = fetchUser();
    result.then((e)=>{
        console.log("Promise completed successfully");
        console.log(`Name: ${e.name} Age: ${e.age}`);
    })

    result.catch((error)=>{console.log("Error",error)});
    
}

display();*/


async function displayuser(){

    try{
        const result = await fetchUser();  //gives resolved value.
        console.log(result);
        //destructing 
        //const{name: username,age: userage} = result;
        //console.log(username);
        //console.log(userage);
        
        console.log(`Promise completed ${result.name} , age : ${result.age}`);

    }
    catch(error)
    {
       console.log(error);
    }

}

displayuser();