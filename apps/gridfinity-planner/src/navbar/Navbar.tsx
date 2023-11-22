import { ActionIcon, AppShell, Box, rem, Tooltip } from '@mantine/core';
import React from 'react';

import { useNavigation } from './NavigationContext';
import { NavigationSection, navigationSections } from './navigationSections';

export const Navbar = () => {
  const { selectedSection, switchSection } = useNavigation();

  const View = selectedSection.selection.view.component;

  return (
    <AppShell.Navbar>
      <div className="flex flex-1">
        <NavigationIcons selectedSection={selectedSection.selection} selectSection={switchSection} />
        <View />
      </div>
    </AppShell.Navbar>
  );
};

type NavigationIconsProps = {
  selectSection: (navigationSection: NavigationSection) => void;
  selectedSection: NavigationSection;
};

const NavigationIcons: React.FC<NavigationIconsProps> = ({ selectSection, selectedSection }) => {
  return (
    <Box bg="dark.6" p={8} className="flex flex-col">
      {navigationSections.map((option) => (
        <NavigationIcon
          key={option.label}
          navigationSection={option}
          onClick={selectSection}
          selectedSection={selectedSection}
        />
      ))}
    </Box>
  );
};

type NavigationIconProps = {
  navigationSection: NavigationSection;
  onClick: (navigationSection: NavigationSection) => void;
  selectedSection: NavigationSection;
};

const NavigationIcon: React.FC<NavigationIconProps> = ({ navigationSection, onClick, selectedSection }) => {
  const isActive = navigationSection.id === selectedSection.id;

  return (
    <Tooltip label={navigationSection.label} position="right" withArrow>
      <ActionIcon
        variant={isActive ? 'light' : 'subtle'}
        style={{
          width: rem('44px'),
          height: rem('44px'),
        }}
        onClick={() => {
          onClick(navigationSection);
        }}
      >
        <navigationSection.icon style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
      </ActionIcon>
    </Tooltip>
  );
};
