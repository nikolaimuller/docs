/* @mullerstd/docs version: 0.0.1 */
import { jsx, jsxs } from 'react/jsx-runtime';

const ColorSwatch = ({ name, color }) => {
    return (jsxs("div", { children: [jsx("span", { className: "docs-block docs-rounded-[var(--ui-radius)]", style: { background: color } }), jsx("p", { className: "docs-mt-1 docs-text-sm docs-font-semibold", children: name })] }));
};
const ColorPallete = ({ title, swatches }) => {
    return (jsxs("div", { children: [jsx("h3", { className: "docs-mb-4 docs-text-lg docs-font-bold", children: title }), jsx("div", { className: "docs-grid docs-gap-2 docs-grid-flow-col", children: swatches.map(({ name, color }) => (jsx(ColorSwatch, { name: name, color: color }, name))) })] }));
};
const ColorsTable = ({ palletes }) => {
    return (jsx("div", { className: "docs-flex docs-flex-col docs-gap-3", children: palletes.map(({ title, swatches }) => (jsx(ColorPallete, { title: title, swatches: swatches }, title))) }));
};

export { ColorsTable };
