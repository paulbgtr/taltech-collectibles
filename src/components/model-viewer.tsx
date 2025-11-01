"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function KeychainModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);

  return <primitive object={scene.clone()} />;
}

export default function ModelViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <Canvas
      camera={{ fov: 10, zoom: 0.8 }}
      style={{
        width: "100%",
        height: "400px",
        background: "transparent",
      }}
    >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <Stage intensity={0.1} environment="city">
          <KeychainModel url={modelUrl} />
        </Stage>
      </Suspense>
      <OrbitControls autoRotate />
    </Canvas>
  );
}
