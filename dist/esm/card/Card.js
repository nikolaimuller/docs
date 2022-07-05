/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';

const Card = ({ children, className = '', ...props }) => {
    return (jsx("div", { className: cx('docs-rounded-[var(--ui-radius)] docs-overflow-hidden docs-shadow-[0_0_0_1px_var(--color-neutral)]', className), ...props, children: children }));
};

export { Card };
