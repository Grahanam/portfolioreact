import React,{useRef, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faC} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetter from "../component/animatedletter/letter"
import '../app.scss'
import emailjs from "@emailjs/browser"
import Loader from "react-loaders"
import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet'


const Contact=()=>{
    const [letterClass]=useState('text-animate')
    const refForm=useRef()

    const sendEmail=(e)=>{
        e.preventDefault()

        emailjs.sendForm(
            'service_678355i',
            'template_1dpi1uh',
            refForm.current,
            '4ptik1b-Yq4XKpu9B'
        )
        .then(
            ()=>{
                alert(' Message successfully sent !')
                window.location.reload(false)
                // window.location.href='https://grahanam.github.io/portfolioreact'
            },
            ()=>{
                alert('Failed to send the message, please try again')
            }
        )
    }
    return(
        <>
            <div className="h-screen md:h-full lg:h-full w-full bg-gray-700">
           <div className="container text-white h-full py-3 px-2 md:py-3 md:px-6 lg:py-3 lg:px-6  flex flex-col md:flex-row lg:flex-row">
           <div className="w-full md:w-6/12 lg:w-6/12 flex items-center justify-center flex-col ">
                <div className="container">
                    <h1 className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl font-semibold mb-2">
                        <i className="hover:text-6xl hover:text-yellow-400 duration-75"><FontAwesomeIcon icon={faC}  className=""/></i>
                        <AnimatedLetter  letterClass={letterClass} strArray={['o','n','t','a','c','t',' ','m','e']} idx={15}/>
                    <br/>
                    </h1>
                    <h2 className="font-sansserif font-bold text-sm md:text-md lg:text-lg text-gray-300 tracking-[0.1em] py-2">
                     I am interested in freelance opportunities - especially ambitious or 
                     large projects. However , if you have either request or question,
                     don't hesitate to contact me using below form either.  
                    </h2>
                </div>
                <div className="form text-black">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="">
                                <input type="text" name="user_name" placeholder="Name" className="md:h-16 lg:h-16" required/>
                            </li>
                            <li className="">
                                <input type="email" name="user_email" placeholder="Email" className="md:h-16 lg:h-16" required/>
                            </li>
                            {/* <li>
                                <input type="text" name="subject" placeholder="Subject" required/>
                            </li> */}
                            <li>
                                <textarea name="message" placeholder="Message" className="md:h-20 lg:h-20" required/>
                            </li>
                            <li>
                                <input type="submit" value="Submit" className="text-yellow-400 border border-yellow-400 hover:text-gray-700 hover:bg-yellow-400 px-2 py-1 duration-75"/>
                            </li>
                        </ul>
                    </form>
                </div>
                

            </div>
            <div className="container w-full h-full md:w-6/12 lg:w-6/12 relative">
                <div className="maptitle hidden md:absolute lg:absolute z-20 r-0 bg-black mt-20 p-3">
                     <h1 className="text-white text-sm">
                        Lunaram Suthar,
                        <br/>
                        Pune ,411046
                        <br/>
                        Maharashtra<br/>
                        lunasuthar5221@gmail.com
                     </h1>
                </div>
                <MapContainer className="map z-0" center={[18.4153263,73.8053229]} zoom={13} style={{height:'100%', width:'100%'}}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[18.4153263,73.8053229]}>
                       <Popup>Lunaram lives here, come over for a cup of coffee :</Popup>
                    </Marker>
                </MapContainer>
                    
                </div>
            </div>
        </div>
        <Loader className=" " type="pacman"></Loader> 
        </>    
    )
}

export default Contact