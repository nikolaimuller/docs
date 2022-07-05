/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const Page = ({ children }) => {
    return (jsx("div", { className: "docs-py-12 docs-min-h-screen docs-bg-[color:var(--color-background-primary)] docs-text-[color:var(--color-text-primary)] docs-font-primary", children: jsx("div", { className: "docs-max-w-6xl docs-px-4 docs-mx-auto", children: children }) }));
};

export { Page };
