import { Fluid } from '@whatisjery/react-fluid-distortion';
import { EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <Canvas
      style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          background: '#000000',
      }}>
      <EffectComposer>
          <Fluid />
      </EffectComposer>
    </Canvas>
  );
}

export default App;