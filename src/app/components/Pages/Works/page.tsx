import React from 'react'
import ResponsiveNav from '../../Navigation/ResponsiveNav'
import ModalContactHomePage from '../../Modals/ModalContactHomePage'
import ModalRegisterHomePage from '../../Modals/ModalRegisterHomePage'
import Footer from '../../Footer/page'
import ScrollMenu from '../../ScrollMenu/ScrollMenu'
import MenuProduct from '../../MenuProduct/MenuProduct'

const WorksPage = () => {
  return (
    <div>
      <ResponsiveNav />
      <MenuProduct/>
      <ScrollMenu />
   
      <Footer/>

      <ModalContactHomePage  />
      <ModalRegisterHomePage />

    </div>
  )
}

export default WorksPage