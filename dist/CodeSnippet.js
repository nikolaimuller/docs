/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Highlight = require('prism-react-renderer');
var prettier = require('prettier/standalone');
var babylon = require('prettier/parser-babel');
var Card = require('./Card.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Highlight__default = /*#__PURE__*/_interopDefaultLegacy(Highlight);
var prettier__default = /*#__PURE__*/_interopDefaultLegacy(prettier);
var babylon__default = /*#__PURE__*/_interopDefaultLegacy(babylon);

const CodeSnippetTheme = {
    plain: {
        color: "var(--color-code-01)",
        padding: "0",
    },
    styles: [
        {
            types: ["changed"],
            style: {
                color: "rgb(162, 191, 252)",
                fontStyle: "italic",
            },
        },
        {
            types: ["deleted"],
            style: {
                color: "rgba(239, 83, 80, 0.56)",
                fontStyle: "italic",
            },
        },
        {
            types: ["inserted", "attr-name"],
            style: {
                color: "var(--color-code-04)",
                fontStyle: "italic",
            },
        },
        {
            types: ["comment"],
            style: {
                color: "var(--color-code-02)",
                fontStyle: "italic",
            },
        },
        {
            types: ["string", "url"],
            style: {
                color: "var(--color-code-06)",
            },
        },
        {
            types: ["variable"],
            style: {
                color: "var(--color-code-08)",
            },
        },
        {
            types: ["number"],
            style: {
                color: "var(--color-code-04)",
            },
        },
        {
            types: ["builtin", "char", "constant", "function"],
            style: {
                color: "var(--color-code-03)",
            },
        },
        {
            types: ["statement"],
            style: {
                color: "var(--color-code-07)",
            },
        },
        {
            types: ["punctuation"],
            style: {
                color: "var(--color-code-07)",
            },
        },
        {
            types: ["selector", "doctype"],
            style: {
                color: "var(--color-code-09)",
                fontStyle: "italic",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "var(--color-code-05)",
            },
        },
        {
            types: ["keyword"],
            style: {
                color: "var(--color-code-09)",
            },
        },
        {
            types: ["tag", "operator"],
            style: {
                color: "var(--color-code-04)",
            },
        },
        {
            types: ["boolean"],
            style: {
                color: "var(--color-code-04)",
            },
        },
        {
            types: ["property"],
            style: {
                color: "var(--color-code-05)",
            },
        },
        {
            types: ["namespace"],
            style: {
                opacity: 0.7,
            },
        },
    ],
};
const CodeSnippet = ({ children: code, language, }) => {
    const prettify = (code) => {
        switch (language) {
            case "tsx": {
                return prettier__default["default"]
                    .format(code, {
                    parser: "babel",
                    plugins: [babylon__default["default"]],
                })
                    .trim();
            }
            default: {
                return code.trim();
            }
        }
    };
    return (jsxRuntime.jsx(Card.Card, { children: jsxRuntime.jsx(Highlight__default["default"], { Prism: Highlight.Prism, code: prettify(code), language: language, theme: CodeSnippetTheme, children: ({ tokens, getLineProps, getTokenProps }) => (jsxRuntime.jsx("pre", { className: "docs-overflow-scroll docs-bg-neutral docs-p-[1rem] docs-font-code selection:docs-bg-[color:var(--color-neutral-hover)] selection:docs-text-inherit", children: tokens.map((line, key) => (jsxRuntime.jsx("div", { ...getLineProps({ line }), className: "docs-table-row", children: jsxRuntime.jsx("div", { className: "docs-table-cell", children: line.map((token, key) => (jsxRuntime.jsx("span", { ...getTokenProps({ token }) }, String(key)))) }) }, String(key)))) })) }) }));
};
const InlineCode = ({ children }) => (jsxRuntime.jsx("code", { className: "docs-rounded-md docs-bg-neutral docs-p-1", children: children }));

exports.CodeSnippet = CodeSnippet;
exports.CodeSnippetTheme = CodeSnippetTheme;
exports.InlineCode = InlineCode;
