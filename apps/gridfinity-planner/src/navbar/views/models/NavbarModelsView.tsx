import { Category, ModelsMetadata } from '@gridfinity-planner/models';
import { Accordion, Card, Text, Title } from '@mantine/core';
import React from 'react';

import modelsMetadataJson from '../../../../public/modelsMetadata.json';
import { NavbarView } from '../../NavbarView';

const modelsMetadata: ModelsMetadata = modelsMetadataJson;

export const NavbarModelsView = () => {
  return (
    <NavbarView className="p-4">
      <ModelsSection />
    </NavbarView>
  );
};

const ModelsSection = () => {
  return (
    <div>
      <Title size="h3">Models</Title>
      <CategoriesAccordion />
    </div>
  );
};

const CategoriesAccordion = () => {
  const categories = modelsMetadata.categories;

  return (
    <Accordion>
      {categories.map((category) => (
        <Accordion.Item key={category.label} value={category.label}>
          <Accordion.Control>{category.label}</Accordion.Control>
          <Accordion.Panel className="overflow-y-auto max-h-96">
            <CategoryModels category={category} />
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

type CategoryModelsProps = {
  category: Category;
};

const CategoryModels: React.FC<CategoryModelsProps> = ({ category }) => {
  return category.models.map((model) => (
    <Card key={model.label} padding="xs" className="my-1">
      <Text>{model.label}</Text>
    </Card>
  ));
};
