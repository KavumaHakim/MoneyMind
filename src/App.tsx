import {BrowserRouter, Routes, Route } from 'react-router-dom';
// import supabase from './supabase-client';
import Dashboard from "./Pages/dashboard";
import Login from "./Pages/login"
import DataEntry from './Pages/DataEntry';

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/data' element={<DataEntry/>}/>
      </Routes>
    </BrowserRouter>
  )
  ;
}

export default App