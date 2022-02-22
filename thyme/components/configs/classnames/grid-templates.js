import { ThymeDictionary } from '../dictionary';

// CLASSNAMES_GRID_TEMPLATES.ETE --> `thyme-grid-template-ete`
export const CLASSNAMES_GRID_TEMPLATES = {};
Object.keys(ThymeDictionary.CONTENT_GRID_TEMPLATE).forEach((template) => {
  CLASSNAMES_GRID_TEMPLATES[template] = ThymeDictionary.CONTENT_GRID_TEMPLATE[template].CLASSNAME;
});

export const lookupGridTemplateClassname = (gridTemplate) => {
  let matchingClassname = null;
  Object.keys(ThymeDictionary.CONTENT_GRID_TEMPLATE).forEach((gridTemplateToken) => {
    if (ThymeDictionary.CONTENT_GRID_TEMPLATE[gridTemplateToken].SYMBOL === gridTemplate) {
      matchingClassname = CLASSNAMES_GRID_TEMPLATES[gridTemplateToken];
    }
  });

  return matchingClassname;
};
