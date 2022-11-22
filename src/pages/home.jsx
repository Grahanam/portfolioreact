import React,{useState} from "react"
import {Link}  from "react-router-dom"
import {Canvas} from "@react-three/fiber"
import ObjectSphere from "../component/animatedobject"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetter from "../component/animatedletter/letter"
import '../app.scss'
import '../component/animatedletter/letter.scss'
import Loader from 'react-loaders'
const Home=()=>{
    const [letterClass]=useState('text-animate')
    const nameArray=['u','n','a','r','a','m']
    const jobArray=['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    return(
        <>
        <div className=" bg-gray-700 w-full h-full  md:py-3 md:px-6 lg:py-3 lg:px-6">
           
           <div className="text-white h-full flex flex-col md:flex-row lg:flex-row">
           <div className="px-3 py-2  flex items-center justify-start lg:w-6/12 md:w-6/12">
                <div className="container">
                    <h1 className="text-yellow text-3xl font-semibold md:text-4xl lg:text-5xl">
                        {/* Hi,<br/> I'm &nbsp; */}
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i,</span>
                    <br/>
                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>'m</span>&nbsp;
                
                    <i className="hover:text-6xl hover:text-yellow-400 duration-75"><FontAwesomeIcon icon={faL}  className=""/></i>
                    <AnimatedLetter  letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br/>
                    <AnimatedLetter  letterClass={letterClass} strArray={jobArray} idx={22}/>
                    </h1>
                    
                    <h2 className="font-sansserif text-md text-gray-300 tracking-[0.2em] py-2">Fullstack Webdeveloper</h2>
                    <br/>
                    <Link to="/contact"><button className="text-yellow-400 border border-yellow-300 hover:text-gray-700 hover:bg-yellow-400 rounded px-3 py-2 duration-75">CONTACT ME</button></Link>
                </div>

            </div>
           <div className="w-full h-full bg-gray-700 md:w-6/12 lg:w-6/12">
           <Canvas  camera={{position:[-5 ,2,10], fov:60}}>
               <directionalLight
                  castShadow
                  position={[-2,9,0]}
                  intensity={1}
                  shadow-mapSize-width={1024}
                  shadow-mapSize-heigth={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}

               />
               <ambientLight intensity={0.3}/>
               <pointLight position={[-10,0,-20]} intensity={0.1}/>
               <pointLight position={[0,-10,0]} intensity={0.1}/>
               <group>
                   <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-3,0]}>
                      <planeGeometry attach='geometry' args={[100,100]} color='yellow'/>
                      
                      <shadowMaterial attach='material' opacity={0.3} color='blue' />
                   </mesh>
               </group>
               {/* <AnimatedSphere/> */}
               <ObjectSphere/>
           </Canvas>
           </div>
           </div>

        </div>
        <Loader type="pacman"></Loader>
        </>
         
    )
}

export default Home


