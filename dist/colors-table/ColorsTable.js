/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const ColorSwatch = ({ name, color }) => {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("span", { className: "docs-block docs-rounded-[var(--ui-radius)]", style: { background: color } }), jsxRuntime.jsx("p", { className: "docs-mt-1 docs-text-sm docs-font-semibold", children: name })] }));
};
const ColorPallete = ({ title, swatches }) => {
    return (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h3", { className: "docs-mb-4 docs-text-lg docs-font-bold", children: title }), jsxRuntime.jsx("div", { className: "docs-grid docs-gap-2 docs-grid-flow-col", children: swatches.map(({ name, color }) => (jsxRuntime.jsx(ColorSwatch, { name: name, color: color }, name))) })] }));
};
const ColorsTable = ({ palletes }) => {
    return (jsxRuntime.jsx("div", { className: "docs-flex docs-flex-col docs-gap-3", children: palletes.map(({ title, swatches }) => (jsxRuntime.jsx(ColorPallete, { title: title, swatches: swatches }, title))) }));
};

exports.ColorsTable = ColorsTable;
