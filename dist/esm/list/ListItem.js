/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';

const ListItem = ({ children }) => {
    return jsx("li", { className: "docs-text-lg", children: children });
};

export { ListItem };
