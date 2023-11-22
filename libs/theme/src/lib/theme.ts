import { createTheme, DEFAULT_THEME, MantineColorsTuple, mergeMantineTheme } from '@mantine/core';

const primaryColors: MantineColorsTuple = [
  '#e5feee',
  '#d2f9e0',
  '#a8f1c0',
  '#7aea9f',
  '#53e383',
  '#3bdf70',
  '#2bdd66',
  '#1ac455',
  '#0caf49',
  '#00963c'
];

const themeOverride = createTheme({
  primaryColor: 'primary',
  colors: {
    primary: primaryColors,
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
