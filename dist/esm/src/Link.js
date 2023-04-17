/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';

const Link = ({ children, ...props }) => {
    return (jsx("a", { className: "docs-text-primary docs-outline-none hover:docs-underline focus:docs-underline", ...props, children: children }));
};

export { Link };
