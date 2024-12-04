import {useEffect, useState} from 'react'
const Counter=()=>{
    const [count,setcount] = useState(0);
    const [count1,setcount1] = useState(0);
    function handleIncre(){
         setcount(count+1);
    }
    function handleDecre(){
        setcount(count-1);
    }
    useEffect(()=>{
        setcount1(count*5)
    })
    return(
        <div>
            <h1>Counter App</h1>
            <h1>Counter: {count}</h1>
            {/* <h1>Counter1: {count*5}</h1> <br /> */}
            <h1>Counter1: {count1}</h1> <br />
            <button onClick={handleIncre}>Increment</button>
            <button onClick={handleDecre}>Decrement</button>
        </div>
    )
}
export default Counter;