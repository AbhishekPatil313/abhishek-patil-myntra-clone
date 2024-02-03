import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/footer'
import HomeItem from '../components/HomeItem'
import {Outlet} from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  
  return (
 
    <>
    <Header/>
    <Outlet/>
    <Footer/>
   
    </>
  )
}

export default App
