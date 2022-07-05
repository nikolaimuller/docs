/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Link = ({ children, ...props }) => {
    return (jsxRuntime.jsx("a", { className: "tw-color-[var(--color-accent)] tw-font-semibold", ...props, children: children }));
};

exports.Link = Link;
