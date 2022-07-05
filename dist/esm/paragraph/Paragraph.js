/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const Paragraph = ({ children }) => {
    return jsx("p", { className: 'paragraph', children: children });
};

export { Paragraph };
