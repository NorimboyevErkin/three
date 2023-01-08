import {
  Environment,
  Center,
  PresentationControls,
  ContactShadows,
} from "@react-three/drei";
import Notebook from "./components/notebook";
import Phone from "./components/phone";

function Model({ isDesktop }) {
  return (
    <>
      <color args={["#081336"]} attach="background" />
      <Environment preset="city" />
      <PresentationControls
        global
        rotation={isDesktop ? [0.13, 0.1, 0] : [0, 0.5, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        {isDesktop ? (
          <Notebook />
        ) : (
          <Center>
            <Phone />
          </Center>
        )}
      </PresentationControls>
      <ContactShadows position-y={-2.4} opacity={0.6} scale={8} />
    </>
  );
}
export default Model;
