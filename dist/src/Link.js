/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Link = ({ children, ...props }) => {
    return (jsxRuntime.jsx("a", { className: "docs-text-primary docs-outline-none hover:docs-underline focus:docs-underline", ...props, children: children }));
};

exports.Link = Link;
