import { theme } from '@gridfinity-planner/theme';
import {
  AppShell,
  AppShellNavbarConfiguration,
  MantineProvider,
} from '@mantine/core';
import { OrbitControls } from '@react-three/drei';
import React, { Suspense } from 'react';

import { PlannerCanvas } from '../canvas';
import { ModelRenderer } from '../components';
import { DoubleNavbar } from '../navbar';

const navbarConfig: AppShellNavbarConfiguration = {
  width: 256,
  breakpoint: 'lg',
};

export const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <AppShell navbar={navbarConfig}>
        <AppShell.Navbar>
          <DoubleNavbar />
        </AppShell.Navbar>

        <AppShell.Main className="flex">
          <PlannerCanvas>
            <Suspense fallback={'loading...'}>
              <ModelRenderer url="/models/Bin/Bin - 1x1x2 - ZackFreedman.stl" />
            </Suspense>

            <OrbitControls panSpeed={0.5} rotateSpeed={0.4} />

            <spotLight
              intensity={1.5}
              angle={0.1}
              penumbra={1}
              position={[450, 350, 20]}
            />
            <spotLight
              intensity={1.5}
              angle={2.5}
              penumbra={1}
              position={[250, 150, 40]}
            />
          </PlannerCanvas>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
