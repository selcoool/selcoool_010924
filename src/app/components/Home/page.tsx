"use client"
import React, { useEffect, useState } from 'react'
import ResponsiveNav from '../Navigation/ResponsiveNav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/page';
import ModalContactHomePage from '../Modals/ModalContactHomePage';
import ModalRegisterHomePage from '../Modals/ModalRegisterHomePage';
import Modal from '../Modals/Modal';
import Hero from '../Hero/Hero';
import TimeLine from '../Timeline/TimeLine';
import ScrollMenu from '../ScrollMenu/ScrollMenu';
import MapGoogle from '../MapGoogle/MapGoogle';
import MenuProduct from '../MenuProduct/MenuProduct';
import SearchProdct from '../SearchProduct/SearchProdct';

const HomePage = () => {
    // const [showContactHomePage,setShowContactHomePage] = useState(false);
    // const [showRegisterHomePage,setShowRegisterHomePage] = useState(false);

    // console.log('showContactHomePage',showContactHomePage)

    // console.log('showRegisterHomePage',showRegisterHomePage)
    useEffect(()=>{
        const initAOS=()=>{
             AOS.init({
              duration:1000,
              easing:"ease",
              once:false,
              anchorPlacement:"top-center"
             })
        };
    
        initAOS();
      },[])
  return (
    <div>
    <ResponsiveNav />
    <Hero/>
    <TimeLine/>
    <ScrollMenu />
    <MenuProduct/>
    <SearchProdct/>
    <MapGoogle/>
    <Footer/>



    <ModalContactHomePage  />
    <ModalRegisterHomePage />
    <Modal/>
    </div>

  )
}

export default HomePage