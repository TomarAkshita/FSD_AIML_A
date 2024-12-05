import {useRef, useState} from 'react'
const RefEx=()=>{
    const cnt=useRef(0);
    const [cnt1,setcnt1]=useState(0);
    console.log("Object Rendered");
    function Incre(){
        cnt.current++;
        setcnt1(cnt1+1);
    }
    return(
        <div>
            <h1>Ref Counter: {cnt.current}</h1>
            <h1>Use Counter: {cnt1}</h1>
            <button onClick={Incre}>Increment</button>
        </div>
    )
}
export default RefEx;