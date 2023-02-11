import React,{useState} from "react"
import {Canvas} from "@react-three/fiber"
import AnimatedSphere from "../component/object"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faP,faHeartMusicCameraBolt,faListCheck} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetter from "../component/animatedletter/letter"
import '../app.scss'
import '../component/animatedletter/letter.scss'
import Loader from 'react-loaders'

const Project=()=>{
    const [letterClass]=useState('text-animate')
    return(
        <>
          <div className="px-3 md:py-3 lg:py-9 md:px-6 lg:px-8 h-screen md:h-full lg:h-full bg-gray-700 w-full ">
           
           <div className="text-white flex h-24 md:38 lg:38 ">
           <div className=" flex items-center justify-start  w-6/12 ">
                <div className="container">
                    <h1 className="text-yellow text-4xl md:text-5xl lg:text-6xl font-semibold ">
                    <i className="hover:text-6xl hover:text-yellow-400 duration-75"><FontAwesomeIcon icon={faP}  className=""/></i>
                    <AnimatedLetter  letterClass={letterClass} strArray={['r','o','j','e','c','t']} idx={22}/>
                    </h1>
                </div> 
                
            </div>
           <div className="container w-6/12 ">
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
               <AnimatedSphere/>
               {/* <ObjectSphere/> */}
           </Canvas>
           </div>
           </div>
           <div className="container w-full flex flex-wrap">
                {/* <a href='http://43.204.233.102/' target="_blank" rel="noreferrer"><div className='h-32 w-32  md:h-36 md:w-36 lg:h-44 lg:w-44 m-4 rounded '>
                          <div className='h-full w-full rounded flex items-center justify-center bg-lime-500 '>
                            <h1 className='absolute font-extrabold text-3xl md:text-4xl lg:text-5xl p-2 text-white'>Do-List</h1>
                            <i className="text-6xl md:text-7xl lg:text-8xl hover:text-yellow-400 duration-75"><FontAwesomeIcon icon={faListCheck}  className=""/></i>
                          </div>
                          <div className=''></div>
                </div>
                </a> */}
                <a href='http://aura.pythonanywhere.com/' target="_blank" rel="noreferrer">
                <div className='h-32 w-32 md:h-36 md:w-36 lg:h-44 lg:w-44 m-4 rounded'>
                          <div className='h-full w-full bg-no-repeat bg-blue-500 rounded flex items-center justify-center' >
                            <h1 className='absolute font-extrabold text-3xl md:text-4xl lg:text-5xl p-2 text-white'>Aura</h1>
                            <i className="text-6xl md:text-7xl lg:text-8xl hover:text-yellow-400 duration-75"><FontAwesomeIcon icon={faHeartMusicCameraBolt}  className=""/></i>
                            </div>
                          <div className=''></div>
                </div>
                </a>
                
            </div>
                

        </div>
        <Loader type="pacman"></Loader> 

        </>
    )
}

export default Project