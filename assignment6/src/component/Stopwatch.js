import { useState } from "react";
import { useRef } from "react";


function Stopwatch (){

    const[timer, setTimer] = useState(0);
    const[isRunning, setIsRunning]= useState(false)
    let timeInterval = useRef(null);
    

    // These functions control the behavior of the stopwatch. handleStart starts the timer by incrementing the timer state every 10 milliseconds. handlePause stops the timer, and handleReset resets both the timer and the running interval.
    
    // HANDLE START
    const handleStart = () =>{
        if(isRunning) return;
        setIsRunning(true);
        timeInterval.current = setInterval(()=>{
            setTimer((prev)=>prev+1);
        },10);
    };

    // HANDLE PAUSE

    const handlePause = () => {
        if(!isRunning) return;
        setIsRunning(false);
        clearInterval(timeInterval.current);
    };

    // HANDLE RESET

    const handleReset = () => {
        setIsRunning(false);
        clearInterval(timeInterval.current);
        setTimer(0)
    }

    // The formatTime function takes the raw timer value (in milliseconds) and formats it into minutes, seconds, and milliseconds. The padStart method ensures that the formatted values always have two digits for minutes and seconds and three digits for milliseconds.
    // FORMAT TIMER 
    const formatTime = (timer) => {
        const minutes = Math.floor(timer / 60000).toString().padStart(2, "0");
        const seconds = Math.floor((timer / 1000) % 60).toString().padStart(2, "0");
        const milliseconds = (timer % 1000).toString().padStart(3, "0");
      
        return { minutes, seconds, milliseconds };
      };
      
      const { minutes, seconds, milliseconds } = formatTime(timer);

    return(
        <>
            <div className="timer-container">
                <div className="timer-box">
                <h1>{minutes}</h1>
                </div>
                <button onClick={handleStart}>START</button>
                <span className="colon">:</span>
                    <div className="timer-box">
                        <h1>{seconds}</h1>
                    </div>
                <button onClick={handlePause}>PAUSE</button>    
                <span className="colon">:</span>
                <div className="timer-box">
                    <h1>{milliseconds}</h1>
                </div>
                <button onClick={handleReset}>RESET</button>
            </div>
        </>
    )
    
}


export default Stopwatch;