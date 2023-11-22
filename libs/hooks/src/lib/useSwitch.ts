import React from 'react';

export type SwitchSelection<T> = {
  selection: T;
  index: number;
};

export type SwitchToFunction<T> = (selection: T) => void;

export const useSwitch = <T>(options: readonly T[], defaultSelected?: T) => {
  const [selection, setSelection] = React.useState<SwitchSelection<T>>({
    selection: defaultSelected ?? options[0],
    index: defaultSelected ? options.indexOf(defaultSelected) : 0,
  });

  const switchTo: SwitchToFunction<T> = (selection: T) => {
    setSelection({
      selection,
      index: options.indexOf(selection),
    });
  };

  const next = () => {
    setSelection((selection) => {
      const nextIndex = (selection.index + 1) % options.length;
      return {
        selection: options[nextIndex],
        index: nextIndex,
      };
    });
  };

  const previous = () => {
    setSelection((selection) => {
      const previousIndex = (selection.index - 1 + options.length) % options.length;
      return {
        selection: options[previousIndex],
        index: previousIndex,
      };
    });
  };

  return {
    selection,
    switchTo,
    next,
    previous,
  }
};
