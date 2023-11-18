import { useLoader } from '@react-three/fiber';
import React from 'react';
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

export type ModelRenderProps = {
  url: string;
}

export const ModelRenderer: React.FC<ModelRenderProps> = ({ url }) => {
  const geom = useLoader(STLLoader, url);

  return (
    <mesh geometry={geom}>
      <meshPhongMaterial color="black" />
    </mesh>
  );
}
