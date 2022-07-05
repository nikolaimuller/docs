/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const Page = ({ children }) => {
    return (jsx("div", { className: 'page', children: jsx("div", { className: 'page-container', children: children }) }));
};

export { Page };
