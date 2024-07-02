// import { useEffect,useState } from "react";


// TASK 1
// function Practice3 (){

//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         console.log("Component is successfully rendered")
//     },[]);

//     return(
//         <>
//         <div>Hey This is to check what happens when component is rendered</div>
//         <button onClick={()=>setCount(count+1)}>Click Me</button>
//         <div>You clicked {count} times</div>
//         </>
//     )
// }
// export default Practice3;



// TASK 2
// function Practice3 () {
//     const names = ["aida","brian","dom", "mia"]
//     const listItems = names.map((name)=> <li>{name}</li>)
//     return(
//         <>
//         <ul>{listItems}</ul>
//         </>
//     )
// }

// export default Practice3;


// TASK 3  reflecting whatever is added in textbox

// function Practice3() {
//    const [value, setValue] = useState("");
//    const handleChange =(event)=> {
//       setValue(event.target.value);
//     }
   
//     return (
//       <div>
//         <input type="text" value={value} onChange={handleChange} />
//         <p>You entered: {value}</p>
//       </div>
//     );
//   }
//   export default Practice3;


//TASK 4 check the below code for counter

// import React, { useState } from "react"
// function Practice3() {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(count + 1)
//   }
//   return (
//     <div>
//       <button onClick={increment}>Increment</button>
//       <p>Count: {count}</p>
//     </div>
//   )
// }
// export default Practice3;