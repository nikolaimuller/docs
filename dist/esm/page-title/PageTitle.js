/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const PageTitle = ({ children }) => {
    return (jsx("h1", { className: "docs-font-[var(--font-secondary)] docs-mb-3 docs-text-4xl docs-font-bold", children: children }));
};

export { PageTitle };
