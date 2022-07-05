/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const Subtitle = ({ children }) => {
    return jsx("h3", { className: 'subtitle', children: children });
};

export { Subtitle };
