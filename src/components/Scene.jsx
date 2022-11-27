import { Canvas } from "@react-three/fiber"
import { Suspense } from 'react'
import SFX from "./SFX_Hologram"

import Boxes from "./shared/Boxes"
import CameraTarget from "./shared/CameraTarget"
import Categories from "./shared/Categories"

function Scene({ atHome, categories, focusedCategory }) {
    const glConfig = {
        alpha: true,
        powerPreference: "high-performance",
        antialias: true,
        stencil: false,
        depth: false
    }

    return (
        <Canvas id="canvas" gl={glConfig} camera={{position: [0, 0, 8]}} background={'#80ded0 '} >
            <CameraTarget atHome={atHome} />
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-5, -10, -10]} />
            
            <Suspense fallback={'Loading three.js...'}>
                <Boxes />
            </Suspense>

            {window.innerWidth > 900 ? 
            <Suspense fallback={'Loading categories...'}>
                <Categories inView={atHome} categories={categories} focused={focusedCategory} />
            </Suspense> 
            : null}

            {/* <SFX /> */}
        </Canvas>
    )
}

export default Scene