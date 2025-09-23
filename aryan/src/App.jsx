// function App(){
//   return (
//     <div>
//       <Button/>
//       <Button/>
//       <Button/>
//     Hello,test{firstname}
//     </div>
//   )
// }
// // export default App 
// function Button(){
//   return (
//     <div>
//       <button>Login</button>
//       <br />
//       <br />
//       <button>Login</button>
//       <br />
//       <br />
//       <button>Login</button>
//     </div>
//   )
// }
// export default Button

// import "./App.css"

// const version = 19;
// function App(){
//   return (
//     <div>
//       <h1 style = {{color:'red',backgroundColor:'grey'}} className="heading">
//         REACT: {version}
//         </h1>
//        <input type="text" maxLength={10} />
//     </div>
//   )
// }
// export default App

// function App(){
//   const firstname = 'test'
//   return (
//     <div>
//       <Button title="Register" color="orange"/>
//       <Button title="login" color="white"/>
//       <Button title="Add to cart" color="green"/>
//     </div>
//   )
// }
// function Button({title,color}){
//   console.log(title,color)
//   return <button style={{backgroundColor:color}}>{title}</button>
// }
// export default App;

// function App(){
//   const handletLoginClick =()=>{
//     alert('login click')
//   } 
//   const handlePrintName =(name)=>{
//     alert('Hello Aryan')
//   }
//   return(
//     <div>
//       <button onClick={()=> console.log('hi')}>click</button>
//       <button onClick={handletLoginClick}>login</button>
//       <button onClick={()=>{handlePrintName('test')}}>Print Name</button>
//     </div>
//   )
// }
// export default App

// import { useState } from 'react';
// function App() {
//   console.log(useState('REACT'));
//   let [newTechnology, setNewTechnology] = useState('ANGULAR');
//   console.log(newTechnology);

//   const handleClick = () => {
//     setNewTechnology('REACT');
//   };
//   return (
//     <div>
//       <h1>{newTechnology}</h1>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }
// export default App;

//hooks  => js function

//create three state variables like name , email , password ;
// update all this at once when user click on a button

// import { useState } from 'react';
// function App() {
//   console.log(useState('REACT'));
//   let [newTechnology, setNewTechnology] = useState('ANGULAR');
//  const [name , setName] = useState('TEST')
//  const [email,setEmail] = useState('test@gmail.com')
//  const [password ,setPassword] = useState('2421@123') ;

//   const handleClick = () => {
//     setNewTechnology('REACT');
//   };
//   const handleUpdateClick = () => {
//     setName('NEW-TEST')
//     setPassword('12345')
//     setEmail('newtest@gmail.com')
//   }
//   return (
//     <div>
//       <h1>{newTechnology}</h1>
//       <h1>{`${name} ${email} ${password}`}</h1>
//       <button onClick={handleUpdateClick}>Click to update</button>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }
// export default App;

//hooks  => HOOKS ARE THE REACT FUNCTIONS
//NOTE HOOKS CAN ONLY BE CALLED INSIDE THE FUNCTIONAL COMPONENT AT TOP LEVEL
//NOTE hooks allow us to use react features like state
//NOTE State refers to that data which changes over the time
//NOTE TO SAVE this type of data we use state varible
//NOTE TO manage state data we use react's useState() hook 
//NOTE UseState accepts initial value as a argument 
//NOTE useState struture 
// const [stateVariableName , setStateVariableFnName] = useState(initialvalue of stateVariable)
//NOTE The work of stateVariableName is to show data on the ui
//NOTE this state varaible only going to update using the setter function
//NOTE we can directly update the state variable like this stateVariable = 'some value' ❌ always use the setter function to update the state variable

//create three state variables like name , email , password ;
// update all this at once when user click on a button

//create a button when i click on the button changes its text .
//create two button when i click on a button swap both btns title ;

// import { useState } from 'react';

// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleEmailChange = (event) => {
//     console.log(event.target.value);
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     console.log(event.target.value);
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       email: email,
//       password: password,
//     };
//     console.log(data);
//   };
//   return (
//     <div>
//       <h1>FORM HANDLING---</h1>
//       <h1>
//         GETTING VALUES OUT OF THE FORM INPUT FIELDS AND SUBMIT THE VALUES AS AN
//         OBJECT
//       </h1>
//       <form onSubmit={handleSubmit}>
//         <label>Email</label>
//         <input onChange={handleEmailChange} type="email" name="email" />
//         <label>  Password</label>
//         <input
//           onChange={handlePasswordChange}
//           type="password"
//           name="password"
//         />
//         <button>Submit</button>
//       </form>
//       <p>Email : {email}</p>
//       <p>Password : {password}</p>
//     </div>
//   );
// }
// export default App;

//LIST RENDERING
// import React from 'react'
// function App() {
//   const NumberList = [1,2,3,4,5,6];
//   return (
//     <div>
//     {NumberList.map((num)=>(
//       <div key={num}>
//         <h1>{num}</h1>
//       </div>
//     ))}
//     </div>
//   )
// }
// export default App

import {useState} from 'react'

function App() {
  const [list,stelist] = useState(['Mobile','Ac','Tv'])
  return (
    <div>
      <form>
        <input type='text'/>
        <button>Add Product</button>
      </form>
    </div>
  )
}
export default App