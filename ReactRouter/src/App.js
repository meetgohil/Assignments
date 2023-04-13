import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'


function App() {
  return (
      <Routes>
        <Route path='/' element={<Navigate replace to='/firstpage'></Navigate>}/>
        <Route path='/firstpage' element={<FirstPage/>}/>
        <Route path='/secondpage' element={<SecondPage/>}/>
        <Route path='/thirdpage' element={<ThirdPage/>}/>
      </Routes>
  );
}

export default App;
