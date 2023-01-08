import { Float, Html, useGLTF } from "@react-three/drei";

function Notebook() {
  const model = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <Float rotationIntensity={0.4}>
      <rectAreaLight
        width={2.5}
        height={1.65}
        intensity={65}
        color={"#ffff"}
        rotation={[-0.1, Math.PI, 0]}
        position={[0, 0.55, -1.15]}
      />
      <primitive
        object={model.scene}
        position-y={-1.7}
        scale={1.5}
        rotation={[0.3, -0.2, 0]}
      >
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0, 1.56, -1.4]}
          rotation-x={-0.256}
        >
          <iframe src="https://norimboyev-1.vercel.app" />
        </Html>
      </primitive>
    </Float>
  );
}

export default Notebook;
