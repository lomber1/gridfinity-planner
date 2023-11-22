import React from 'react';

export const useSelection = <T>(defaultSelection?: T) => {
  const [selection, setSelection] = React.useState<T | undefined>(
    defaultSelection
  );

  const select = (selection: T | undefined) => {
    setSelection(selection);
  };

  const clear = () => {
    setSelection(undefined);
  };

  return [
    selection,
    {
      select,
      clear,
    },
  ] as const;
};
