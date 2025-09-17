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

import { useState } from 'react';   
function App() {
  console.log(useState('REACT'));
  let [newTechnology, setNewTechnology] = useState('ANGULAR');
  console.log(newTechnology);
 const [name , setName] = useState('TEST')
 const [email,setEmail] = useState('test@gmail.com')
 const [password ,setPassword] = useState('2421@123') ;

  const handleClick = () => {
    setNewTechnology('REACT');
  };
  const handleUpdateClick = () => {
    setName('NEW-TEST')
    setPassword('12345')
    setEmail('newtest@gmail.com')
  }
  return (
    <div>
      <h1>{newTechnology}</h1>
      <h1>{`${name} ${email} ${password}`}</h1>
      <button onClick={handleUpdateClick}>Click to update</button>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
export default App

