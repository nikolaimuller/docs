/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';

const ListItem = ({ children, }) => {
    return jsx("li", { className: "docs-text-base", children: children });
};
const List = ({ children }) => {
    return (jsx("ul", { className: "docs-my-4 docs-list-disc docs-space-y-1 docs-pl-6", children: children }));
};

export { List, ListItem };
