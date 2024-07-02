import { useEffect, useState } from "react"

const Home =  () =>{

    const[dummy, setDummy] = useState();

    const btnClickHandler = () =>{
        setDummy("One");
    }

    const btnResetValue =()=>{
    setDummy("zero");
    }

    useEffect(()=>{
        console.log("use effect is caleld");
        alert("use effect is called when page first loads or button is click which means if value of dummy changes ");
    }, [dummy]);


    return <>
    THIS IS THE VALUE OF DUMMY :- {dummy}
    <button onClick={btnClickHandler}>Click to see UseEffectTest</button>
    <hr/>
    <button onClick={btnResetValue}>Reset the value </button>
    </>
}

export default Home;