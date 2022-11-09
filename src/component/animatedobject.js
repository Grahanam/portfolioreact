import React from 'react'
import {MeshDistortMaterial,Sphere} from "@react-three/drei"


const ObjectSphere=()=>{
    
    return(
        <>
        <mesh castShadow>
           
            {/* <sphereGeometry  attach="geometry" args={[2,200]}/> */}
            <Sphere castShadow visible args={[1,200,200]} scale={2}>
            <MeshDistortMaterial attach='material' distort={1} color='yellow' speed={1} roughness={0.6}/>
            </Sphere>
        </mesh>
        </>
        
    )
}

export default ObjectSphere