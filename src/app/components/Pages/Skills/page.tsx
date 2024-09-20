import React from 'react'
import ResponsiveNav from '../../Navigation/ResponsiveNav'
import ModalContactHomePage from '../../Modals/ModalContactHomePage'
import ModalRegisterHomePage from '../../Modals/ModalRegisterHomePage'
import Footer from '../../Footer/page'
import Expertise from '../../Expertise/Expertise'
import VideoList from '../../VideoList/VideoList'

const SkillsPage= () => {
  return (
    <div>
       <ResponsiveNav />
       <Expertise/>
       <VideoList/>
       <Footer/>

       <ModalContactHomePage  />
       <ModalRegisterHomePage />

    </div>
  )
}

export default SkillsPage