import { useState } from "react";

const Child = (props)=>{
 let child_value = "";
 const [val, setValue]=useState("");

//  first funtion to set value on click which is passed from child to parent 
const titleFromChild = () =>{
    let child_value = "This is passed from child";

    setValue(child_value)
    props.func(child_value); };

//  second funtion to reset value on click which is passed from child to parent     
const resetValue = () =>{
    child_value= "";
    setValue("{empty string}")
    props.func(child_value);};

    return (
        <>
        
        <h2>this is a child component</h2>
        Proof this is a child component - value - <b>{val}</b><br/><br/>

        <p><button onClick={titleFromChild}>Click to see data from child</button></p>

        <p><button onClick={resetValue}>Click to reset value</button></p>
        
        
        </>
    )

};
export default Child;






