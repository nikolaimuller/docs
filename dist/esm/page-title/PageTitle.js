/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const PageTitle = ({ children }) => {
    return (jsx("h1", { className: "docs-mb-3 docs-font-[var(--font-secondary)] docs-font-bold docs-text-4xl", children: children }));
};

export { PageTitle };
