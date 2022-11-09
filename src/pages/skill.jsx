import * as THREE from 'three'
import React,{useState,useMemo,useEffect ,useRef} from "react"
import {Canvas,useFrame} from "@react-three/fiber"
import {Text, TrackballControls} from '@react-three/drei'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faS} from '@fortawesome/free-solid-svg-icons'
import AnimatedLetter from "../component/animatedletter/letter"
import '../app.scss'
import '../component/animatedletter/letter.scss'
import Loader from 'react-loaders'
// import randomWord from 'random-words'

let MyList = ['GitHub','OOP','Wordpress', 'SQL', 'NoSQL', 'C/C++','ReactJs', 'JavaScript', 'Python','Nodejs', 'Git', 'Excel', 'Bootstrap', 'HTML5', 'CSS3', 'Heroku', 'Java', 'Scss', 'Django','ExpressJs','MongoDB','Tailwind','React', 'Node']
function wordFromMyList(i, j) {
    return MyList[i * 4 + j];
  }

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = {  fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation() ,setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(() => {
      if (hovered) document.body.style.cursor = 'pointer'
      return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
      // Make text face the camera
      ref.current.quaternion.copy(camera.quaternion)
      // Animate font color
      ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
    })
    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
  }
  
  function Cloud({ count = 4, radius = 20 }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
      const temp = []
      const spherical = new THREE.Spherical()
      const phiSpan = Math.PI / (count + 0)
      const thetaSpan = (Math.PI * 2) / count
      for (let i = 1; i < count + 1; i++)
        for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), wordFromMyList(i,j)])
      return temp
    }, [count, radius])
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
  }


const Skill=()=>{
    const [letterClass]=useState('text-animate')
    return(
        <>
        <div className="md:py-3 md:px-6 lg:py-3 lg:px-6  h-100vh md:h-full lg:h-full   bg-gray-700 w-full ">
           
           <div className="text-white h-full flex flex-col md:flex-row md:flex-row">
           <div className="w-full flex  items-center justify-start  md:w-6/12 lg:w-6/12 p-2">
                <div className="container">
                    <h1 className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl font-semibold ">
                        {/* Hi,<br/> I'm &nbsp; */}
                    
            
                    <i className="hover:text-6xl hover:text-yellow-400 duration-75"><FontAwesomeIcon icon={faS}  className=""/></i>
                    <AnimatedLetter  letterClass={letterClass} strArray={['k','i','l','l','s']} idx={15}/>
                    <br/>
                    
                    </h1>
                    
                    <h2 className="font-sansserif text-md font-bold lg:text-lg text-white tracking-[0.1em] py-2">Expert in Full-stack development including technologies like
                    <span className="text-yellow-400"> HTML5, CSS3, Javascript, React, Django, Nodejs, Bootstrap, Sass, Git,</span> etc.
                     <br/>
                     <br/>
                      I'm not a designer but I have a good sense of asethetics, and experience in responsive, mobile-first web design.I put
                      special effort into optimizing my code and providing the best user experience.I guarantee a commitment during work 
                      on your project.
                     <br/>
                     <br/>
                     Also you can checkout my cv on this <a href='https//:google.com' className="text-yellow-400 decoration-solid underline">link</a>.
                     </h2>
                </div>

            </div>
           <div className="w-full h-full md:w-6/12 lg:w-6/12">
           <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                   <fog attach="fog" args={['#202025', 0, 80]} />
                   <Cloud count={8} radius={20} />
                   <TrackballControls />
          </Canvas>
           
           </div>
           </div>

        </div>
        <Loader type="pacman"></Loader>
        </>

    )
}

export default Skill