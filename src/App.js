import {Route, Routes } from "react-router-dom"
import HomePage from "./Homepage"
import Login from "./Login"

 const App = ()=> {


  return (
  <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<HomePage />} />
   </Routes> 
        ) 

}

export default App;
