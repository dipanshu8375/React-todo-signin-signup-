
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import Todo from "./components/Todo";

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Signup/>}></Route>
    <Route path="/Signin" element={<Signin/>}></Route>
    <Route path="/todo" element={<Todo/>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
