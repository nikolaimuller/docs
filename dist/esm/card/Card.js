/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const Card = ({ children, className = '', ...props }) => {
    return (jsx("div", { className: ['card', className].join(' '), ...props, children: children }));
};

export { Card };
