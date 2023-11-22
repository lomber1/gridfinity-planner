import { SwitchSelection, SwitchToFunction, useSwitch } from '@gridfinity-planner/hooks';
import React from 'react';

import { defaultSection, NavigationSection, navigationSections } from './navigationSections';

export type NavigationContextValues = {
  selectedSection: SwitchSelection<NavigationSection>;
  switchSection: SwitchToFunction<NavigationSection>;
};

const defaultNavigationValues: NavigationContextValues = {
  selectedSection: {
    selection: defaultSection,
    index: 0,
  },
  switchSection: (section: NavigationSection) => {},
};

export const NavigationContext = React.createContext<NavigationContextValues>(defaultNavigationValues);

type NavigationProviderProps = {
  children?: React.ReactNode;
};

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const { selection, switchTo } = useSwitch<NavigationSection>(navigationSections, defaultSection);

  const value = React.useMemo(
    (): NavigationContextValues => ({
      switchSection: switchTo,
      selectedSection: selection,
    }),
    [selection, switchTo]
  );

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
};

export const useNavigation = () => React.useContext(NavigationContext);
