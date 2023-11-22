import { Category, ModelsMetadata } from '@gridfinity-planner/models';
import * as fs from 'fs';
import * as path from 'path';

const publicPath = path.resolve(__dirname, '../../public');
const modelsPath = path.join(publicPath, 'models');

const generateModelsMetadata = (): ModelsMetadata => {
  const metadata: ModelsMetadata = {
    categories: []
  };

  const categoryDirs = fs.readdirSync(modelsPath);

  categoryDirs.forEach((categoryDir) => {
    const category: Category = {
      label: categoryDir,
      models: []
    }

    const categoryModelsPath = path.join(modelsPath, categoryDir)
    const categoryModels = fs.readdirSync(categoryModelsPath)

    category.models = categoryModels.map((model) => ({
      label: model,
      path: `/models/${categoryDir}/${model}`,
    }));

    metadata.categories.push(category);
  });

  return metadata;
};

const saveMetadataAsJson = (savePath: string, metadata: ModelsMetadata): void => {
  const json = JSON.stringify(metadata);

  fs.writeFileSync(savePath, json)
}

const modelsMetadata = generateModelsMetadata()
saveMetadataAsJson(path.join(publicPath, 'modelsMetadata.json'), modelsMetadata);
