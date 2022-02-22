import React from 'react';
import PropTypes from 'prop-types';
import { ThymeClassnames } from '../configs';

const tagPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.elementType,
]);

export const Link = ({
  children,
  tag,
  truncate,
  ...rest
}) => {
  const SelfTag = tag || 'a';

  return (
    <SelfTag {...rest}>
      {truncate ? (
        <span className="t-thyme--truncate">
          {children}
        </span>
      ) : children}
    </SelfTag>
  );
};

Link.defaultProps = {
  children: null,
  tag: null,
  truncate: false,
};

Link.CLASSNAMES = { ...ThymeClassnames.LINK };

Link.tagPropTypes = tagPropTypes;

Link.propTypes = {
  children: PropTypes.node,
  tag: tagPropTypes,
  truncate: PropTypes.bool,
};
