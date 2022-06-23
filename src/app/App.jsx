import React from 'react';
import appStyle from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import {Header} from '../components/header/header';
import {Main} from '../pages/main/main';
import {NotFount} from '../pages/notFound/notFound'


const  App = () => {
  return (
    <>
    <Header />
    <Routes>
     <Route path='/' element={<Main />} />
     <Route path='*' element={<NotFount />} />
    </Routes>
    </>
  );
}

export default App;
