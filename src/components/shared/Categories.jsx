import { useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import { Box } from "@react-three/drei"
import * as THREE from 'three'
import { useState } from "react"
import { useEffect } from "react"

function Category(props) {
    const mesh = useRef()

    const { inView, position, material, focused, count, index } = props

    const vec = new THREE.Vector3(...position)
    // console.log(vec);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 50 ))

    useFrame(({ clock }) => {
        if(!inView){
            mesh.current.position.lerp(
                new THREE.Vector3(position[0] + x, position[1] + y, position[2] + z)
                , .01
            )
        } else {
            const _focused = focused === index

            const radians = ((360 / count) * (index + clock.getElapsedTime())) * Math.PI/180

            if(!_focused){
                mesh.current.rotation.x += 0.002
                mesh.current.rotation.z += 0.005
                mesh.current.rotation.y += 0.007

                vec.set(...position)
                mesh.current.position.lerp(
                    new THREE.Vector3(position[0] + (6 * Math.cos(radians)), position[1] + (6 * Math.sin(radians)), position[2])
                    , .01)
            } else {
                mesh.current.rotation.x = 0
                mesh.current.rotation.z = 0
                mesh.current.rotation.y = 0

                vec.set(7, 20, 20)
                mesh.current.position.lerp(vec, .1)
            }
        }
    })

    return (
        <Box 
            ref={mesh} 
            position={position} 
            material={material ? material : null}
        >
            <meshPhysicalMaterial 
                color="red" 
                metalness={0.5} 
                roughness={1} 
                transmission={0.6} 
                thickness={.5}
            />
        </Box>
    )
}

function Categories(props) {
    const [categoryObjects, setCategoryObjects] = useState([])
    
    useEffect(() => {
        setCategoryObjects(
            props.categories.map((item, i) => {
                return <Category 
                    inView={props.inView} 
                    key={item+i} 
                    position={[13.5, 20, 28]} 
                    index={i} 
                    focused={props.focused} 
                    count={props.categories.length} 
                />
            })
        )
    }, [props])
    
    
    return(
        <>
            {categoryObjects}
        </>
    )
}

export default Categories