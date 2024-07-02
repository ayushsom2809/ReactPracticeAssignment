import { useState } from "react";

const FormValidation = () => {

    const[dummyText, setDummyText]= useState("");
    const[dummyDown, setDummyDown]=useState("");
    
    //submit handler managing output and validation
    const submitHandler = (event) =>{
        event.preventDefault();

        if(dummyText.length ===0 || dummyText === ""){
            alert("Please enter something");
            return;
        }
        else{
            alert('You have entered ' + dummyText )
        }
        if(dummyDown.length ===0 || dummyDown==="" || isNaN(dummyDown)){
            alert("dropdown is not a number");
            return;
        }
        else{
            alert(dummyDown + "is the dropdown number you selected")
        }

        alert("you have validated the from successfully")
    }


    // first function to see whatever value is entered in console
    const textHandler = (event)=>{
        console.log("you entered " + event.target.value)
        setDummyText(event.target.value)
    }

    //second function to see about select dropdown
    const selectHandler = (event) =>{
        console.log("you selected " + event.target.value)
        setDummyDown(event.target.value)
    }

    

    return <>
    <form onSubmit={submitHandler}>
        
    <label>input</label>
    <input type="text" placeholder="input" onChange={textHandler}></input><br/>

    <label>select menu</label>
    <select onChange={selectHandler}>
        <option>select</option>
        <option>1</option>
        <option>2</option>
    </select>
    <button onClick={submitHandler}>Submit</button>

    </form>
    
    </>

}

export default FormValidation;