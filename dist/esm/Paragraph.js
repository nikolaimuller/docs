/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';

const Paragraph = ({ children }) => {
    return jsx("p", { className: "docs-my-4", children: children });
};

export { Paragraph };