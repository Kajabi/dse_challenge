import { ThymeTokens } from '../tokens';

// Generates spacer classnames from spacer tokens such as:
// CLASSNAMES_SPACERS.3XS_TOP ---> `thyme-spacer-top-3xs`
// Note that `MD` is default so CLASSNAMES_SPACERS.MD_TOP will return `thyme-spacer-top` (no `-md`)
const spacerClassPrefix = 'thyme-spacer';
export const CLASSNAMES_SPACERS = {};
Object.keys(ThymeTokens.SPACERS).forEach((spacerToken) => {
  const spacerClassSuffix = ThymeTokens.SPACERS[spacerToken] === ThymeTokens.SPACERS.MD ? '' : `-${ThymeTokens.SPACERS[spacerToken]}`;
  CLASSNAMES_SPACERS[`${spacerToken}_TOP`] = `${spacerClassPrefix}-top${spacerClassSuffix}`;
  CLASSNAMES_SPACERS[`${spacerToken}_RIGHT`] = `${spacerClassPrefix}-right${spacerClassSuffix}`;
  CLASSNAMES_SPACERS[`${spacerToken}_BOTTOM`] = `${spacerClassPrefix}-bottom${spacerClassSuffix}`;
  CLASSNAMES_SPACERS[`${spacerToken}_LEFT`] = `${spacerClassPrefix}-left${spacerClassSuffix}`;
});
