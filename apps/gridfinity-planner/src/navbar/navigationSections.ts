import { Icon, IconSettings, IconTemplate } from '@tabler/icons-react';

import { NavbarModelsView } from './views/models';
import { NavbarSettingsView } from './views/settings';

export type NavigationView = {
  width: number | string;
  component: () => JSX.Element
}

export type NavigationSection = {
  id: string;
  label: string;
  icon: Icon;
  view: NavigationView
}

export const navigationSections: readonly NavigationSection[] = [
  {
    id: 'models',
    label: 'Models',
    icon: IconTemplate,
    view: {
      width: 350,
      component: NavbarModelsView,
    },
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: IconSettings,
    view: {
      width: 350,
      component: NavbarSettingsView,
    },
  }
];

export const defaultSection = navigationSections[0];
