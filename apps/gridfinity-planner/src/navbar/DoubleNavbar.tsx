import { ActionIcon, Tooltip } from '@mantine/core';
import { Icon, IconLayoutGrid, IconSettings } from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';

import { ModelsSection } from './ModelsSection';

type ViewId = 'models' | 'settings';

export type Cell = {
  id: ViewId;
  label: string;
  icon: Icon;
  view: React.ReactNode;
};

const cells: Cell[] = [
  {
    id: 'models',
    label: 'Gridfinity models',
    icon: IconLayoutGrid,
    view: <ModelsSection />,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: IconSettings,
    view: 'settings',
  },
];

const getViewById = (id: ViewId): Cell['view'] =>
  cells.find((cell) => cell.id === id)?.view;

const defaultView: ViewId = 'models';

export const DoubleNavbar = () => {
  const [activeView, setActiveView] = React.useState<ViewId>(defaultView);

  const handleSetActiveView = React.useCallback(
    (cell: Cell) => {
      setActiveView(cell.id);
    },
    [setActiveView]
  );

  return (
    <nav className="flex flex-col">
      <div className="flex flex-1">
        <NavigationCells
          onSelectCell={handleSetActiveView}
          activeViewId={activeView}
        />
        <ActiveView activeViewId={activeView} />
      </div>
    </nav>
  );
};

type CellsProps = {
  onSelectCell: (cell: Cell) => void;
  activeViewId: ViewId;
};

const NavigationCells: React.FC<CellsProps> = ({
  onSelectCell,
  activeViewId,
}) => {
  return (
    <div className="flex flex-col w-12 m-2">
      {cells.map((cell) => (
        <NavigationCell
          key={cell.label}
          cell={cell}
          activeViewId={activeViewId}
          onClick={() => onSelectCell(cell)}
        />
      ))}
    </div>
  );
};

type ActiveViewProps = {
  activeViewId: ViewId;
};

const ActiveView: React.FC<ActiveViewProps> = ({ activeViewId }) => {
  const activeView = getViewById(activeViewId);

  return <section className="flex-1 max-h-screen overflow-y-auto">{activeView}</section>;
};

type NavigationCellProps = {
  cell: Cell;
  activeViewId: ViewId;
  onClick: () => void;
};

const NavigationCell: React.FC<NavigationCellProps> = ({
  cell,
  activeViewId,
  onClick,
}) => {
  const isActive = cell.id === activeViewId;

  return (
    <Tooltip label={cell.label} position="right" withArrow>
      <ActionIcon
        onClick={onClick}
        radius="sm"
        size="xl"
        variant={clsx({
          light: isActive,
          subtle: !isActive,
        })}
        className="my-1"
      >
        <cell.icon size={36} />
      </ActionIcon>
    </Tooltip>
  );
};
