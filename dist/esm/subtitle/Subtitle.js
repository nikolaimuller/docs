/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';

const Subtitle = ({ children }) => {
    return jsx("h3", { className: "docs-mt-3 docs-mb-2 docs-text-lg docs-font-bold", children: children });
};

export { Subtitle };
