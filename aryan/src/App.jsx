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

import { useState } from 'react';
function App() {
  console.log(useState('REACT'));
  let [newTechnology, setNewTechnology] = useState('ANGULAR');
  console.log(newTechnology);

  const handleClick = () => {
    setNewTechnology('REACT');
  };
  return (
    <div>
      <h1>{newTechnology}</h1>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;

//hooks  => js function


//create three state variables like name , email , password ;

// update all this at once when user click on a button