/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';
import cx from 'classnames';

const Card = ({ children, className, ...props }) => {
    return (jsx("div", { className: cx("docs-overflow-hidden docs-rounded-[var(--ui-radius)] docs-shadow-[0_0_0_1px_var(--color-neutral)]", className), ...props, children: children }));
};

export { Card };
