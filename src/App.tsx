import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import supabase from './supabase-client';
import Dashboard from "./Pages/dashboard";
import Login from "./Pages/login"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
  ;
}

export default App