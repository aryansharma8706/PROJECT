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

function App(){
  const handletLoginClick =()=>{
    alert('login click')
  } 
  const handlePrintName =(name)=>{
    alert('Hello Aryan')
  }
  return(
    <div>
      <button onClick={()=> console.log('hi')}>click</button>
      <button onClick={handletLoginClick}>login</button>
      <button onClick={()=>{handlePrintName('test')}}>Print Name</button>
    </div>
  )
}
export default App