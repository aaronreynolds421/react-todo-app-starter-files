import React from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClass } from '../utilities/getClass';

const buttonType = {
  main: 'main',
  other: 'other',
};
function Button({ children, type, variant, ...rest }) {
  return (
    <button
      className={getClass([
        styles.button,
        styles[`button--${buttonType[variant]}`],
      ])}
      type={type === 'submit' ? 'submit' : 'button'}
      {...rest}
    >
      {children}
    </button>
  );
}

function ChooseButton({ children, ...rest }) {
  return (
    <select
      className={getClass([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}
export { ChooseButton };
export default Button;
