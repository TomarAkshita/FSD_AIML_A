import { useReducer } from "react";

const Reducer=()=>{
    const initial=0;
    const [state,dispatch]=useReducer(reducer,initial);
    function reducer(state,action){
        switch(action){
            case "add":
                return state+1;
                break
            case "subtract":
                return state-1;
            case "reset":
                return 0;
            default:
                throw new Error("Unexpected action");
        }
    }
    return(
        <div>
            <h1>Counter:{state}</h1>
            <button onClick={()=>dispatch("add")}>Increment</button>
            <button onClick={()=>dispatch("subtract")}>Decrement</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>
        </div>
    )
}
export default Reducer;