import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ThymeTokens } from '../configs';
import { Icon } from '../Icon';
import { EMPTY_STATE_SCOPES } from './configs';

export const EmptyState = ({
  actions,
  centerVertical,
  children,
  compact,
  graphic,
  icon,
  scope,
  text,
  title,
  titleTag,
  ...rest
}) => {
  const className = classnames(
    'thyme-empty-state',
    {
      'thyme-empty-state--center': centerVertical,
      'thyme-empty-state--compact': compact && scope !== EMPTY_STATE_SCOPES.COMPACT,
      [`thyme-empty-state--${scope}`]: scope,
    },
  );

  const TitleTag = titleTag || 'h2';

  return (
    <section
      className={className}
      {...rest}
    >
      {graphic && (
        <div className="thyme-empty-state__graphic">
          {graphic}
        </div>
      )}
      {icon && (<Icon icon={icon} size={Icon.SIZES.XXXL} className="thyme-empty-state__icon" />)}
      <div className="thyme-empty-state__content">
        {title && (
          <TitleTag className="thyme-empty-state__title">
            {title}
          </TitleTag>
        )}
        {text && (
          (typeof text === 'string') ? (
            <p className="thyme-empty-state__text">
              {text}
            </p>
          ) : (
            <div className="thyme-empty-state__text">
              {text}
            </div>
          )
        )}
        {actions && (
          <div className="thyme-empty-state__actions">
            {actions}
          </div>
        )}
      </div>
      {children}
    </section>
  );
};

EmptyState.SCOPES = EMPTY_STATE_SCOPES;

EmptyState.defaultProps = {
  actions: null,
  centerVertical: false,
  children: null,
  compact: false,
  graphic: null,
  icon: null,
  scope: EmptyState.SCOPES.DEFAULT,
  text: null,
  title: null,
  titleTag: 'h2',
};

EmptyState.propTypes = {
  actions: PropTypes.node,
  centerVertical: PropTypes.bool,
  children: PropTypes.node,
  compact: PropTypes.bool,
  graphic: PropTypes.node,
  icon: PropTypes.oneOf(Object.values(ThymeTokens.ICONS)),
  scope: PropTypes.oneOf(Object.values(EmptyState.SCOPES)),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
