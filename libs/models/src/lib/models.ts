export type ModelMetadata = {
  label: string;
  path: string;
}

export type Category = {
  label: string;
  models: ModelMetadata[];
}

export type ModelsMetadata = {
  categories: Category[];
}
