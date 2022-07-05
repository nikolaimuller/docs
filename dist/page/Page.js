/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Page = ({ children }) => {
    return (jsxRuntime.jsx("div", { className: 'page', children: jsxRuntime.jsx("div", { className: 'page-container', children: children }) }));
};

exports.Page = Page;
