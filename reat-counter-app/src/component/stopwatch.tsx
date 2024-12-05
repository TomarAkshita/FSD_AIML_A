import {useEffect,useState} from 'react'
const Stopwatch=()=>{
    const [cnt,setcnt]=useState(0);
    const [isvalid,setisvalid]=useState(0);
    const [isRun,setisRun]=useState(false);
    function handleStart(){
        setisRun((pre)=>!pre);
        clearInterval(isvalid);
    }
    function handleReset(){
        setcnt(0);
        setisRun(false);
    }
    useEffect(()=>{
        if(isRun){
            const val=setInterval(()=>{
                setcnt((cnt)=>(cnt+1));
            },1000)
            setisvalid(val);
        }
        return ()=>clearInterval(isvalid);
    },[isRun]);
    function timeformat(time){
        const hrs=Math.floor(time/3600);
        const min=Math.floor((time%3600)/60);
        const sec=time%60;
        return `${hrs}:${min}:${sec}`;
    }
    return(
        <div>
            <h1>StopWatch App</h1>
            <h1>Timer - {timeformat(cnt)}</h1> <br />
            <button onClick={handleStart}>{isRun?'Stop':'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Stopwatch;