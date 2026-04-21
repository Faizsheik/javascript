import logo from './logo.svg';
import UserCard from './components/card';
import './App.css';
import UserManager from './components/usermanager';
import MyForm from './components/MyForm'
import {useState,useEffect} from 'react';
import Result from './components/Result';
const secretNum = Math.floor(Math.random()*10)+1;


function App() {

  const [term,setTerm] = useState("");


  const handleChange  = (e) => {
    setTerm(e.target.value);
  }

  // const users = [
  //   {id:1, name:"faiz", age:23},
  //   {id:2,name:"jeni", age: 16},
  //   {id:3,name:"jesi",age:28}
  // ]
 
  return (
  
    <div className="container">
      <div className='head'>
         <label htmlFor='term'>Guess the number between 1-10 </label> 
      </div>
      {/* <p>Answer: {secretNum}</p> */}

      
        <input id='term' type='text' name='term' onChange={handleChange} />
        <Result  secretNum={secretNum} term={term} />

       

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      {/* <h2>User List</h2>
      {
        users.map((user)=>{
          return(
          <UserCard id={user.id} name={user.name} age={user.age}/>
          )
        })
      } */}
      {/* <UserManager/>    */}
      {/* <MyForm/> */}

    </div>
  )
}

export default App;
