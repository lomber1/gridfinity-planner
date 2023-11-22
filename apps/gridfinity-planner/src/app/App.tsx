import { AppShell, AppShellNavbarConfiguration } from '@mantine/core';
import React from 'react';

import { Navbar, useNavigation } from '../navbar';

export const App = () => {
  const { selectedSection } = useNavigation();

  const navbarConfig = React.useMemo(
    (): AppShellNavbarConfiguration => ({
      width: selectedSection.selection.view.width,
      breakpoint: 'lg',
    }),
    [selectedSection.selection.view.width]
  );

  return (
    <AppShell navbar={navbarConfig}>
      <Navbar />
      <Main />
    </AppShell>
  );
};

const Main = () => {
  return <AppShell.Main>Main</AppShell.Main>;
};
