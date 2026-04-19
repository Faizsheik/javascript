import React  from "react";
import reactDom  from 'react-dom/client';
import { useState,useEffect } from "react";

function UserManager() {


    const [users,setUser] = useState([]);
    const [name,setName] = useState("");
    const [age,setAge] = useState("");

   useEffect(()=>{
        console.log("users updated");
    },[users])

    console.log(users);

    function addUser()
    {
        const newuser = 
        {
           name: name,
           age: age
        }

        setUser((pre)=>[...pre,newuser]);

    }
     

    
    return(
        <>
          <h2>User Details</h2>

          <ul>
            {
                users.map((user,index) => (
                <li key={user.index}>
                    {user.name} - {user.age}
                </li>
                ))
            }
            </ul>

         {/* {
            users.map((user) => (
                <div key={user.id}>
                <h1>{user.name}</h1>
                <h1>{user.age}</h1>
                </div>
            ))
        } */}
          
           {
            <input type="text" placeholder="Enter name" value={name} onChange={(e)=> setName(e.target.value)}/>
            
                //(e)=>setUser((previousState)=>({...previousState,name:e.target.value}))
            
           }

           {
            <input type="text" placeholder="Enter age" value={age} onChange = {(e)=> setAge(e.target.value)}
            
                //(e)=>setUser((previousState)=>({...previousState,age:e.target.value}))
            />
           }

          { <button type="submit" placeholder="add user" onClick={addUser}>Add user </button>}

        </>
    )
}


export default UserManager;
