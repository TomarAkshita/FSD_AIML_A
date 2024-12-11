import { useContext } from "react";
import {StudentContext} from './Parent';
const Child2=()=>{
    const student=useContext(StudentContext);
    return(
        <div>
            <h1>Child2 Component</h1>
            <h3>Name={student.name}</h3>
            <h3>Age={student.age}</h3>
        </div>
    )
}
export default Child2;