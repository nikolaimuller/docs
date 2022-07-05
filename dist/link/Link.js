/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Link = ({ children, ...props }) => {
    return (jsxRuntime.jsx("a", { className: "docs-text-primary hover:docs-underline focus:docs-underline docs-outline-none", ...props, children: children }));
};

exports.Link = Link;
