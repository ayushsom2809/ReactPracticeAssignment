import { useRef } from "react";


// CLICK COUNT USING useRef HOOK !
function Click (){

    let ref = useRef(0)

    const handleClickCounter = () => {
        ref.current = ref.current + 1;
        console.log('You clicked ' + ref.current + " times !")
    }

    return(
        <>
        <button onClick={handleClickCounter}>Click me!</button>
        </>
    )
}
export default Click;

// 