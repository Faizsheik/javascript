

async function getUsers(){
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await result.json();  // it reads and converts the stream to json (takes time so it is a async)
        console.log(data);  //returns as array of objects here
        console.log("List of users:");
        data.forEach((user)=>{
            console.log(`${user.name} : ${user.email} ` );
        })
        //console.log("fetchusers:",result.json());
    }
    catch(error){
        console.log("Error caught:",error);
    }
}

getUsers();

//single user

async function getUser(){
    try{
        const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await result.json();  
        console.log("Title:",data.title);  
        console.log("Body:",data.body);  

        //console.log("fetchusers:",result.json());
    }
    catch(error){
        console.log("Error caught:",error);
    }
}
console.log("get single user")
getUser();



