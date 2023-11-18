import { Canvas } from '@react-three/fiber';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const PlannerCanvas: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex-1">
      <Canvas camera={{ position: [450, 650, 20], fov: 30 }}>{children}</Canvas>
    </div>
  );
};
