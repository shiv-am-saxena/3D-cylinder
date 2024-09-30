import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';
import { useThree } from "@react-three/fiber";
export default function Scene() {
    let text = useTexture("./banner.png");
    text.needsUpdate = true;
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta/3;
    })
    const { viewport } = useThree();
    return (
        <group rotation={[0, 1.2, 0.35]}>
            <mesh ref={cyl} scale={(viewport.width) > (viewport.height)? ((viewport.width / 2) * (.2)): ((viewport.width / 2) * (.5))} >
                <cylinderGeometry args={[1.5, 1.5, 1.5, 100, 100, true]} />
                <meshStandardMaterial map={text} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    )
}
