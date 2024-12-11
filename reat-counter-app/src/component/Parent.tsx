import { createContext } from "react";
import Child1 from "./child1";
const StudentContext=createContext();
const Parent=()=>{
    const st={
        name:"Akshita",
        age:19
    }
    return(
        <StudentContext.Provider value={st}>
        <div>
        <h1>Parent Component</h1>
        <Child1/>
        </div>
        </StudentContext.Provider>
    )
}
export default Parent;
export {StudentContext};