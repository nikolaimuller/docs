/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const List = ({ children }) => {
    return jsx("ul", { className: "docs-my-4 docs-list-disc docs-space-y-1 docs-pl-6", children: children });
};

export { List };
