import React,{useRef} from 'react'
// import {Sphere} from 'drei'
import {useFrame} from '@react-three/fiber'



const AnimatedSphere=()=>{
    const mesh=useRef(null)
    useFrame(()=>(mesh.current.rotation.x=mesh.current.rotation.y +=0.01));
    return(
        <>
        <mesh castShadow ref={mesh}>
            
            <boxGeometry  attach="geometry" args={[3,3,3]}/>
            {/* <textGeometry  attach="geometry" args={[2,200]}/> */}
            <meshStandardMaterial  attach='material' color='yellow'/>
            {/* <MeshWobbleMaterial attach='material' color='yellow' speed={1} /> */}
            {/* <MeshDistortMaterial attach='material' distort={0.3} color='yellow' speed={1.5}/> */}
        </mesh>
        {/* <Box>
        <meshStandardMaterial  attach='material'/>
        </Box> */}
        </>
        
    )
}

export default AnimatedSphere