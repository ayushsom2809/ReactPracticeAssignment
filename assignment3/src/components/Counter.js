import { useState } from "react";

const Counter = () =>{



const[count, setCount]=useState(0);



    return(
    <>

    <p>HI THIS IS TO TEST COUNTER</p>
    <p>{count}</p>
    <p>
        <button onClick={()=>{
            setCount(count+1);
        }}>Click Me!</button>
        <button onClick={()=>{
            setCount(count-1);
        }}>Click Me!</button>
    </p>
    

    </>

    )
};
export default Counter;