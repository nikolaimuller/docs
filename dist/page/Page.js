/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Page = ({ children }) => {
    return (jsxRuntime.jsx("div", { className: "docs-min-h-screen docs-bg-[color:var(--color-background-primary)] docs-py-12 docs-font-primary docs-text-[color:var(--color-text-primary)]", children: jsxRuntime.jsx("div", { className: "docs-mx-auto docs-max-w-6xl docs-px-4", children: children }) }));
};

exports.Page = Page;
