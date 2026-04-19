import React  from "react";
import reactDom  from 'react-dom/client';
import { useState,useEffect } from "react";


function MyForm()
{
    //const [name,setName] = useState('');
    //console.log('current State', name);

    const[inputs,setInputs] = useState({}); // store as objects

    function handleSubmit(e)
    {
        e.preventDefault(); // to submit browser refersh
        console.log("form submiitted");
        console.log('current State', inputs);

    }

    function handleChange(e)
    {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((pre)=>{return {...pre,[name]:value}})
    }

    return <form onSubmit={handleSubmit}>   
        {/* never break line after return */}

       {/* <label>Enter your name: <input type="text" name="name" onChange={(e)=>setInputs((pre)=>({...pre,name:e.target.value}))} /></label> event handler does not need return,state updater needs it */}
       <label>Enter your name: <input type="text" name="name" onChange={handleChange}/></label> {/*event handler does not need return,state updater needs it */}
       <label>Enter you age: <input type="text" name="age" onChange={handleChange}/> </label>
       <input type="submit" value="Submit Form" />
    </form>
    

}
export default MyForm;
