import { Accordion } from '@mantine/core';

import { useModelsContext } from '../models/hooks';

export const ModelsSection = () => {
  const modelsMetadata = useModelsContext().metadata;

  return (
    <Accordion>
      {modelsMetadata.categories.map((category) => (
        <Accordion.Item key={category.label} value={category.label}>
          <Accordion.Control>{category.label}</Accordion.Control>
          <Accordion.Panel>
            {category.models.map((model) => (
              <div key={model.label}>
                <h3>{model.label}</h3>
              </div>
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
