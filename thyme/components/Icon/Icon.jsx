import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThymeTokens } from '../configs';
import { ICON_ADJACENT_TYPES, ICON_CARD_COLORS, ICON_SIZES } from './configs';

export const Icon = ({
  adjacentType,
  backgroundHeight,
  backgroundWidth,
  cardColor,
  circular,
  className,
  color,
  icon,
  label,
  size,
  ...rest
}) => {
  const classNames = classnames(
    className,
    {
      [`thyme-icon-${icon}`]: icon && (!size || size === ICON_SIZES.MD),
      [`thyme-icon-${icon}-${size}`]: icon && size,
      [`t-thyme--color-${color}`]: color,
      [`thyme-icon--adjacent-type-${adjacentType}`]: adjacentType,
    }
  );

  const wrapperClassNames = classnames(
    'thyme-icon-background',
    {
      'thyme-icon-background--custom-size': backgroundHeight || backgroundWidth,
      [`thyme-icon-background--${cardColor}`]: cardColor,
      [`thyme-icon-background--${size}`]: size,
      'thyme-icon-background--circular': circular,
    },
  );

  const attributes = {};
  if (!label || label === '') {
    attributes['aria-hidden'] = true;
  } else {
    attributes['aria-label'] = label;
  }

  const renderIcon = () => (
    <i className={classNames} {...attributes} {...rest} />
  );

  const setBackgroundDimensions = () => {
    const props = {};

    backgroundHeight = backgroundHeight || backgroundWidth;
    backgroundWidth = backgroundWidth || backgroundHeight;

    if (circular) {
      backgroundWidth = backgroundHeight;
    }

    props['--thyme-icon-background-height'] = backgroundHeight;
    props['--thyme-icon-background-width'] = backgroundWidth;

    return props;
  };

  return cardColor ? (
    <div
      style={setBackgroundDimensions()}
      className={wrapperClassNames}
    >
      {renderIcon()}
    </div>
  ) : renderIcon();
};

Icon.ADJACENT_TYPES = ICON_ADJACENT_TYPES;
Icon.CARD_COLORS = ICON_CARD_COLORS;
Icon.COLORS = ThymeTokens.COLOR_SLIDERS;
Icon.ICONS = ThymeTokens.ICONS;
Icon.SIZES = ICON_SIZES;

Icon.defaultProps = {
  adjacentType: null,
  backgroundHeight: null,
  backgroundWidth: null,
  cardColor: null,
  circular: false,
  className: '',
  color: ThymeTokens.COLOR_SLIDERS.INHERIT,
  label: '',
  size: null,
};

Icon.propTypes = {
  adjacentType: PropTypes.oneOf(Object.values(Icon.ADJACENT_TYPES)),
  backgroundHeight: PropTypes.string,
  backgroundWidth: PropTypes.string,
  cardColor: PropTypes.oneOf(Object.values(Icon.CARD_COLORS)),
  circular: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(Icon.COLORS)),
  icon: PropTypes.oneOf(Object.values(Icon.ICONS)).isRequired,
  label: PropTypes.string,
  size: PropTypes.oneOf(Object.values(Icon.SIZES)),
};
