/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';

const PageTitle = ({ children }) => {
    return jsx("h1", { className: "docs-mb-3 docs-text-4xl", children: children });
};

export { PageTitle };
