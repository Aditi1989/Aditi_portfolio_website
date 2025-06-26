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
        // Move model lower so it's just under the text
        scale={isMobile ? 0.18 : 0.22}
        position={isMobile ? [0, -1.4, 0] : [0, -1.5, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(undefined);
  const [mobileControlsEnabled, setMobileControlsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Only render Canvas after isMobile is determined
  if (isMobile === undefined) return null;

  return (
    <div style={{ position: "relative" }}>
      {/* Show toggle only on mobile */}
      {isMobile && (
        <button
          style={{
            position: "absolute",
            zIndex: 10,
            top: 10,
            right: 10,
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            background: "#222",
            color: "#fff",
            cursor: "pointer",
            fontSize: "0.95rem",
            opacity: 0.85,
          }}
          onClick={() => setMobileControlsEnabled((v) => !v)}
        >
          {mobileControlsEnabled ? "Disable Rotation" : "Enable Rotation"}
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
            // Allow vertical dragging (up/down)
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            // Always start facing straight
            target={[0, 0, 0]}
            defaultPolarAngle={0}
            defaultAzimuthAngle={0}
            makeDefault
            enabled={!isMobile ? true : mobileControlsEnabled}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;

