import React from 'react';

import modelsMetadata from '../../public/modelsMetadata.json';
import { ModelsMetadata } from '../scripts/generateModelsMetadata';

export type ModelsContextValue = {
  metadata: ModelsMetadata;
}

const defaultValue: ModelsContextValue = {
  metadata: modelsMetadata
}

export const ModelsContext = React.createContext<ModelsContextValue>(defaultValue);

type ModelsProviderProps = {
  children: React.ReactNode;
}

export const ModelsProvider: React.FC<ModelsProviderProps> = ({ children }) => {
  return (
    <ModelsContext.Provider value={defaultValue}>
      {children}
    </ModelsContext.Provider>
  );
}

