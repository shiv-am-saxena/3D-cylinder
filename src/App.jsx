import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import { Environment, OrbitControls } from '@react-three/drei';
export default function App() {
  return (
    <Canvas flat camera={{ fov: 50 }}>
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
      <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/brown_photostudio_02_4k.hdr']} />
      <ambientLight />
      <Scene />
      <EffectComposer>
        <Bloom
          mipmapBlur
          intensity={0.25}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9} />
        <ToneMapping adaptive />
      </EffectComposer>
    </Canvas>
  )
}
