/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';

const Page = ({ children }) => {
    return (jsx("div", { className: "docs-min-h-screen docs-bg-[color:var(--color-background-primary)] docs-py-12 docs-font-primary docs-text-[color:var(--color-text-primary)]", children: jsx("div", { className: "docs-mx-auto docs-max-w-6xl docs-px-4", children: children }) }));
};

export { Page };
