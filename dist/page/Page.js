/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Page = ({ children }) => {
    return (jsxRuntime.jsx("div", { className: "docs-py-12 docs-min-h-screen docs-bg-[color:var(--color-background-primary)] docs-text-[color:var(--color-text-primary)] docs-font-primary", children: jsxRuntime.jsx("div", { className: "docs-max-w-6xl docs-px-4 docs-mx-auto", children: children }) }));
};

exports.Page = Page;
