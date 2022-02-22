import { ThymeDictionary } from '../dictionary';

export const TOKENS_GRID_TEMPLATES = {};
Object.keys(ThymeDictionary.CONTENT_GRID_TEMPLATE).forEach((template) => {
  TOKENS_GRID_TEMPLATES[template] = ThymeDictionary.CONTENT_GRID_TEMPLATE[template].SYMBOL;
});
