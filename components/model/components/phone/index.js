import { Float, Html, useGLTF } from "@react-three/drei";

function Phone() {
  const model = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/iphone-x/model.gltf",
    (loader) => {
      console.log(loader, "loader");
    }
  );
  return (
    <Float rotationIntensity={0.4}>
      <primitive
        object={model.scene}
        position-y={-2}
        scale={1.4}
        rotation-y={-0.3}
      >
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0.17, 1.33, 0.09]}
          rotation-x={0}
        >
          <iframe src="https://norimboyev-1.vercel.app" />
        </Html>
      </primitive>
    </Float>
  );
}

export default Phone;
