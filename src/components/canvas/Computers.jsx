import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.18 : 0.22}
        position={isMobile ? [0, -1.4, 0] : [0, -1.5, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(undefined);
  const [controlsEnabled, setControlsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    setControlsEnabled(!mediaQuery.matches); // default: enabled for desktop, off for mobile

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      setControlsEnabled(!event.matches); // update toggle based on device
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (isMobile === undefined) return null;

  return (
    <div style={{ position: "relative" }}>
      {/* Show toggle only on mobile */}
      {isMobile && (
        <button
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 10,
            padding: "8px 12px",
            fontSize: "14px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#000",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setControlsEnabled((prev) => !prev)}
        >
          {controlsEnabled ? "Disable Rotate" : "Enable Rotate"}
        </button>
      )}

      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 1.5, 7], fov: 30 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enabled={controlsEnabled}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            target={[0, 0, 0]}
            makeDefault
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
