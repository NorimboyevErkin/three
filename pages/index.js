import React, { Suspense } from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import Model from "../components/model";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import Loader from "../components/Loader/loader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const created = () => {
    console.log("created");
  };

  return (
    <>
      <Head>
        <title>Norimboyev Erkin</title>
        <meta
          name="description"
          content="Norimboyev Erkin portfolio three js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Canvas
          shadows
          dpr={[1, 2]} // pixsellar ninbati
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
          camera={{ fov: 50, near: 0.1, far: 200, position: [0, 0, 6] }}
          onCreated={created}
        >
          <Suspense
            fallback={
              <mesh>
                <Loader />
              </mesh>
            }
          >
            <Model isDesktop={isDesktop} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
