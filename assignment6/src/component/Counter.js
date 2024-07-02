import { useState } from "react"

function Counter (){
    // const [counter, setCounter] = useState(0)
    // const addValue = () =>{
    //     setCounter(counter+1)
    // }
    // const reduceValue = () =>{
    //     setCounter(counter-1)
    // }
    
    // return(
    //     <>
    //     <div>Counter example</div>
    //     <p>Current value of counter is {counter}</p>
    //     <button onClick={addValue}>Increment</button>
    //     <button onClick={reduceValue}>Decrement</button>
        
    //     </>
    // )

    const [counter, setCounter] = useState(0)

    const increment = () =>{
        setCounter(counter+1)
    }
    const Decrement = () =>{
        setCounter(counter-1)
    }
}

export default Counter