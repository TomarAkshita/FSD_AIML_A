import {useEffect, useState} from 'react'
const Stopwatch=()=>{
    const [cnt,setcnt]=useState(0);
    const [isRun,setisRun]=useState(false);
    function handleStart(){
        setisRun((pre)=>!pre);
    }
    return(
        <div>
            <h1>StopWatch App</h1>
            <h1>Timer - {cnt}:{cnt}</h1> <br />
            <button onClick={handleStart}>{isRun?'Stop':'Start'}</button>
            <button>Reset</button>
        </div>
    )
}
export default Stopwatch;