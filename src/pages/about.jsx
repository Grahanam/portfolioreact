import React,{useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faA} from '@fortawesome/free-solid-svg-icons'
import Typical from 'react-typical'
import Vid from '../assets/typing.mp4'
import '../app.scss'
import AnimatedLetter from "../component/animatedletter/letter"
import Loader from "react-loaders"
const About=()=>{
    const [letterClass]=useState('text-animate')
    return(
        // absolute z-10 w-auto h-full min-w-full min-h-full max-w-none
        <>
           <div className="videocontainer relative flex items-center justify-start overflow-hidden h-screen ">
           <video autoPlay loop className="min-h-full min-h-full h-full absolute z-1 max-w-none" id='video' >
                        <source src={Vid} type='video/mp4'/>
            </video>
           <div className="container relative z-2 text-white h-full py-1 px-2 flex md:py-3 md:px-6 lg:py-3 lg:px-6 ">
           <div className="w-full md:w-6/12 lg:w-6/12 flex items-center justify-start ">
                <div className="container">
                    <h1 className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl font-semibold ">
                        {/* Hi,<br/> I'm &nbsp; */}
                        <i className="hover:text-6xl hover:text-yellow-400 duration-75"><FontAwesomeIcon icon={faA}  className=""/></i>
                        <AnimatedLetter  letterClass={letterClass} strArray={['b','o','u','t',' ','m','e']} idx={15}/>
                    </h1>
                    <br/>
                    <br/>
                    <div className="bg-gray-200 bg-opacity-50 p-1">
                    <h1 className="text-white text-3xl md:text-4xl lg:text-4xl font-semibold">
                    <Typical steps={['Developer',1000,'Artist',1000,'Problem solver',1000,'Gearhead',1000,'Programmer',1000]}
                       loop={Infinity}
                       wraps="p"
                    />
                    </h1>
                    <h2 className="font-sansserif font-bold text-sm md:text-md lg:text-lg text-black tracking-[0.1em] py-2">I'm very ambitious full-stack developer looking
                     for a role in established IT company with the opporunity to work with the latest technologies on challenging
                     and diverse projects.
                     <br/>
                     <br/>
                     I'm quietly confident, naturally curious,and perpetually working on improving my chops one design problem at a time.
                     <br/>
                     <br/>
                     If I need to define myself in one sentence that would be a sports fanatic,enthusiast and tech-obessed!!!
                     </h2>
                     </div>
                    <br/>
                </div>
                

            </div>
            </div>
        </div>
        <Loader type="pacman"></Loader>
        </>
    )
}

export default About