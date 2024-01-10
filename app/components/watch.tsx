"use client";

import { Canvas, GroupProps } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  ContactShadows,
  Html,
  OrbitControls,
} from "@react-three/drei";

function Watch(props: GroupProps) {
  const { nodes, materials } = useGLTF("/watch/watch-v1.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        // @ts-ignore
        geometry={nodes.Object005_glass_0.geometry}
        material={materials.glass}
      >
        <Html
          scale={100}
          rotation={[Math.PI / 2, 0, 0]}
          position={[180, -350, 50]}
          transform
          occlude
        >
          <div className="bg-white border">
            6.550 $ <span style={{ fontSize: "1.5em" }}>🥲</span>
          </div>
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        // @ts-ignore
        geometry={nodes.Object006_watch_0.geometry}
        material={materials.watch}
      />
    </group>
  );
}

export function WatchView() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
        <ambientLight intensity={0.5} />
        <Watch rotation={[-Math.PI / 2, 0, 0]} scale={0.004} />
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.75}
          scale={10}
          blur={2.5}
          far={4}
        />
        <Environment preset="city" />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
