"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

function KeychainModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "400px",
        background: "oklch(0.95 0.009 90)",
      }}
    >
      <Stage environment="city" intensity={0.8}>
        <KeychainModel url={modelUrl} />
      </Stage>
      <OrbitControls autoRotate />
    </Canvas>
  );
}
