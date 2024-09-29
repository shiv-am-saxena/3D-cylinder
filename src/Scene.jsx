import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';
export default function Scene() {
    let text = useTexture("./banner.png");
    text.needsUpdate = true;
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta/4;
    })
    return (
        <group rotation={[0, 1.2, 0.35]}>
            <mesh ref={cyl} >
                <cylinderGeometry args={[1.5, 1.5, 1.5, 100, 100, true]} />
                <meshStandardMaterial map={text} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}
