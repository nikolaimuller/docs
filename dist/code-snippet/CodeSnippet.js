/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var Highlight = require('prism-react-renderer');
var prettier = require('prettier/standalone');
var babylon = require('prettier/parser-babel');
var Card = require('../card/Card.js');
var theme = require('./theme.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Highlight__default = /*#__PURE__*/_interopDefaultLegacy(Highlight);
var prettier__default = /*#__PURE__*/_interopDefaultLegacy(prettier);
var babylon__default = /*#__PURE__*/_interopDefaultLegacy(babylon);

const CodeSnippet = ({ children: code, language }) => {
    const prettify = (code) => {
        switch (language) {
            case 'tsx': {
                return prettier__default["default"]
                    .format(code, {
                    parser: 'babel',
                    plugins: [babylon__default["default"]],
                })
                    .trim();
            }
            default: {
                return code.trim();
            }
        }
    };
    return (jsxRuntime.jsx(Card.Card, { children: jsxRuntime.jsx(Highlight__default["default"], { Prism: Highlight.Prism, code: prettify(code), language: language, theme: theme.theme, children: ({ tokens, getLineProps, getTokenProps }) => (jsxRuntime.jsx("pre", { className: "docs-bg-neutral docs-p-[1rem] docs-font-code selection:docs-text-inherit selection:docs-bg-[color:var(--color-neutral-hover)]", children: tokens.map((line, key) => (react.createElement("div", { ...getLineProps({ line }), key: key }, line.map((token, key) => (react.createElement("span", { ...getTokenProps({ token }), key: key })))))) })) }) }));
};
const InlineCode = ({ children }) => (jsxRuntime.jsx("code", { className: "docs-rounded-md docs-bg-neutral docs-p-1", children: children }));

exports.CodeSnippet = CodeSnippet;
exports.InlineCode = InlineCode;
