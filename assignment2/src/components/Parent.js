import { useState } from "react";
import Child from "./Child";



const Parent = () => {

   const[title, setTitle]= useState("Empty String")

   const fromParent = (fromChild) => {
    setTitle(fromChild);
   };
    return(
        <>
        <h2>This is a parent component</h2><br/>
        Proof: below will change after clicking button <br/>
        Title Supplied from Child  : <b>{title}</b><br/><br/>
        <Child func={fromParent}/>
        </>
    )
};

export default Parent;