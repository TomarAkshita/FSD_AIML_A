import {Routes,Route} from 'react-router-dom'
import Counter  from './component/counter'
import Stopwatch from './component/stopwatch'
import Home from './component/home'
import RefEx from './component/relex'
import Parent from './component/Parent'
import Reducer from './component/reducer'
const App=()=>{
 return(
  <div>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
      <Route path="/stopwatch" element={<Stopwatch/>}></Route>
      <Route path="/refEx" element={<RefEx/>}></Route>
      <Route path="/contex" element={<Parent/>}></Route>
      <Route path="/reducer" element={<Reducer/>}></Route>
      <Route path="*" element={<h1>No Page Available</h1>}></Route>
    </Routes>
  </div>
 )
}

export default App;