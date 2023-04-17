/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const ListItem = ({ children, }) => {
    return jsxRuntime.jsx("li", { className: "docs-text-base", children: children });
};
const List = ({ children }) => {
    return (jsxRuntime.jsx("ul", { className: "docs-my-4 docs-list-disc docs-space-y-1 docs-pl-6", children: children }));
};

exports.List = List;
exports.ListItem = ListItem;
