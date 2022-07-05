/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const Link = ({ children, ...props }) => {
    return (jsx("a", { className: "tw-color-[var(--color-accent)] tw-font-semibold", ...props, children: children }));
};

export { Link };
