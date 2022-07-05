/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const Link = ({ children, ...props }) => {
    return (jsx("a", { className: "docs-text-primary hover:docs-underline focus:docs-underline docs-outline-none", ...props, children: children }));
};

export { Link };
