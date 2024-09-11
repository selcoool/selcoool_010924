"use client"
import React, { useEffect, useState } from 'react'
import ResponsiveNav from '../../Navigation/ResponsiveNav'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../../Footer/page';
import ModalContactHomePage from '../../Modals/ModalContactHomePage';
import ModalRegisterHomePage from '../../Modals/ModalRegisterHomePage';
import Modal from '../../Modals/Modal';
import Hero from '../../Hero/Hero';
import TimeLine from '../../Timeline/TimeLine';
import ScrollMenu from '../../ScrollMenu/ScrollMenu';
import MapGoogle from '../../MapGoogle/MapGoogle';
import MenuProduct from '../../MenuProduct/MenuProduct';
import SearchProdct from '../../SearchProduct/SearchProdct';
import { sha256 } from 'js-sha256';

import * as fbq from '../../../../lib/fbpixel';



const HomePage = () => {
    // State to handle modal visibility
    const [showContactHomePage, setShowContactHomePage] = useState(false);
    const [showRegisterHomePage, setShowRegisterHomePage] = useState(false);


    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease",
            once: false,
            anchorPlacement: "top-center"
        });
    }, []);

    // Facebook Pixel integration for route change tracking

  //   useEffect(() => {
  //     const handleRouteChange = () => {
  //         fbq.pageview();
  //     };
  //     handleRouteChange();
  // }, []);


  
  const createSendingData = async ({ values, eventId }: { values: any; eventId: any })  => {

  return {
    event_name: "CompleteRegistration",
    event_id: eventId,  // Use eventId passed in the function
    event_time: Math.floor(Date.now() / 1000), // Get current Unix timestamp
    action_source: "website",
    event_source_url: typeof window !== "undefined" ? window.location.href : "", // Check if window is defined
    user_data: {
      fn: [sha256(values.firstName)],
      ln: [sha256(values.lasttName)], // Fixed lastName instead of firstName for both
     
    },
    custom_data: {
      currency: "USD",
      value: "142.52",
      ADASADDAS: "CAN THO ư"
    }
  };
}

const triggerFormCompleteRegistration = async () => {
   const values ={
    firstName: "minh thanh",
    lasttName: 'tran'
   }
  const eventId = 75395122; // Static event ID
  const sendData = await createSendingData({ values, eventId });

  // Send the event via Facebook Pixel
  // const additionalData = {};
  fbq.event("Purchase", values, { eventID: eventId });
  fbq.pageview()
  
  fetch(`https://graph.facebook.com/v20.0/980884502489134/events?access_token=EAAMrhaUGXVwBO6686EjOiLVzzAj6jGwC25obbWUNkZCN1ZCKGnjZBQTMm74TlL9ZCFlno31kk4zHKmmlGRb5yw4FiXZAq7Ap723COvOlvlvkN7tkLb98H2csTMggR4X3z2iTvLZBRvNVnDi5YTJ9ZBOlvoVZCZAms7BaBgyYZBnZCE9tOJBTmv6rqu55f8Yyyz8tisDfQZDZD`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              "data": [
                  sendData
              ], "test_event_code": "TEST1369"
          })
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));

      alert('Bạn đã bấm')
}




  

    return (
        <div className='bg-slate-200'>
          {/* <div className="flex justify-center items-center ">
            <div className='w-[50%] h-[10%] bg-purple-500 flex justify-center items-center'>
              <button onClick={triggerFormCompleteRegistration}>Nút bấm</button>
            </div>
          </div> */}
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
    );
};

export default HomePage;


// "use client"
// import React, { useEffect, useState } from 'react'
// import ResponsiveNav from '../Navigation/ResponsiveNav'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Footer from '../Footer/page';
// import ModalContactHomePage from '../Modals/ModalContactHomePage';
// import ModalRegisterHomePage from '../Modals/ModalRegisterHomePage';
// import Modal from '../Modals/Modal';
// import Hero from '../Hero/Hero';
// import TimeLine from '../Timeline/TimeLine';
// import ScrollMenu from '../ScrollMenu/ScrollMenu';
// import MapGoogle from '../MapGoogle/MapGoogle';
// import MenuProduct from '../MenuProduct/MenuProduct';
// import SearchProdct from '../SearchProduct/SearchProdct';
// import { sha256 } from 'js-sha256';

// import * as fbq from '../../../lib/fbpixel'
// import { useRouter } from 'next/router';

// const HomePage = () => {
//     // const [showContactHomePage,setShowContactHomePage] = useState(false);
//     // const [showRegisterHomePage,setShowRegisterHomePage] = useState(false);

//     console.log('MAI MAI YEU CHI',sha256("THANHCONG"))

//     // console.log('showRegisterHomePage',showRegisterHomePage)
//     useEffect(()=>{
//         const initAOS=()=>{
//              AOS.init({
//               duration:1000,
//               easing:"ease",
//               once:false,
//               anchorPlacement:"top-center"
//              })
//         };
    
//         initAOS();
//       },[])


//       const router = useRouter();
//       useEffect(() => {
//         const handleRouteChange = () => {
//           fbq.pageview();
//         };
      
//         router.events.on('routeChangeComplete', handleRouteChange);
//         return () => {
//           router.events.off('routeChangeComplete', handleRouteChange);
//         };
//       }, [router.events]);
//   return (
//     <div>
//     <ResponsiveNav />
//     <Hero/>
//     <TimeLine/>
//     <ScrollMenu />
//     <MenuProduct/>
//     <SearchProdct/>
//     <MapGoogle/>
//     <Footer/>



//     <ModalContactHomePage  />
//     <ModalRegisterHomePage />
//     <Modal/>
//     </div>

//   )
// }

// export default HomePage