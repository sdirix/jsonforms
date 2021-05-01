export const getData = (state: JsonFormsState) =>
  extractData(get(state, 'jsonforms.core'));
export const getSchema = (state: JsonFormsState): JsonSchema =>
  extractSchema(get(state, 'jsonforms.core'));
export const getUiSchema = (state: JsonFormsState): UISchemaElement =>
  extractUiSchema(get(state, 'jsonforms.core'));
export const getRefParserOptions = (state: JsonFormsState): RefParser.Options =>
  extractRefParserOptions(get(state, 'jsonforms.core'));
export const getAjv = (
  state: JsonFormsState
): Ajv => extractAjv(get(state, 'jsonforms.core'));
export const getDefaultData = (
  state: JsonFormsState
): JsonFormsDefaultDataRegistryEntry[] =>
  extractDefaultData(get(state, 'jsonforms.defaultData'));
export const getRenderers = (
  state: JsonFormsState
): JsonFormsRendererRegistryEntry[] => get(state, 'jsonforms.renderers');
export const getCells = (
  state: JsonFormsState
): JsonFormsCellRendererRegistryEntry[] => get(state, 'jsonforms.cells');
export const getUISchemas = (
  state: JsonFormsState
): JsonFormsUISchemaRegistryEntry[] => get(state, 'jsonforms.uischemas')