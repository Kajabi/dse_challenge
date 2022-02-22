import * as ThymeDictionary from './dictionary';

// TOKENS_COLORS.GREY --> `'grey'`
export const TOKENS_COLORS = {
  INHERIT: 'inherit',
};
Object.keys(ThymeDictionary.COLOR_CORE).forEach((colorName) => {
  TOKENS_COLORS[colorName] = colorName.toLowerCase();
});

// TOKENS_COLOR_PALETTE.GREY_400 --> `#bbcad8`
export const TOKENS_COLOR_PALETTE = {};
Object.keys(ThymeDictionary.COLOR).forEach((colorName) => {
  Object.keys(ThymeDictionary.COLOR[colorName]).forEach((index) => {
    switch (colorName) {
      case 'WHITE':
      case 'BLACK':
        TOKENS_COLOR_PALETTE[`${colorName}`] = ThymeDictionary.COLOR[colorName][index].HEX;
        break;
      default:
        TOKENS_COLOR_PALETTE[`${colorName}_${index}`] = ThymeDictionary.COLOR[colorName][index].HEX;
        break;
    }
  });
});

// TOKENS_COLOR_SLIDERS.GREY_400 --> `'grey-400'`
export const TOKENS_COLOR_SLIDERS = {
  INHERIT: 'inherit',
};
Object.keys(ThymeDictionary.COLOR).forEach((colorName) => {
  Object.keys(ThymeDictionary.COLOR[colorName]).forEach((index) => {
    if (index === '300') {
      TOKENS_COLOR_SLIDERS[`${colorName}`] = ThymeDictionary.COLOR[colorName][index].CODE;
    }
    TOKENS_COLOR_SLIDERS[`${colorName}_${index}`] = ThymeDictionary.COLOR[colorName][index].CODE;
  });
});
