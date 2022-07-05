/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';

const PageTitle = ({ children }) => {
    return jsx("h1", { className: 'page-title', children: children });
};

export { PageTitle };
