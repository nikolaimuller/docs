/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var reactLive = require('react-live');
var prettier = require('prettier/standalone');
var babylon = require('prettier/parser-babel');
var Card = require('../card/Card.js');
var theme = require('../code-snippet/theme.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var prettier__default = /*#__PURE__*/_interopDefaultLegacy(prettier);
var babylon__default = /*#__PURE__*/_interopDefaultLegacy(babylon);

const Playground = ({ code, language, scope }) => {
    const prettify = (code) => {
        return prettier__default["default"]
            .format(code, {
            parser: 'babel',
            plugins: [babylon__default["default"]],
            singleQuote: true,
        })
            .trim();
    };
    return (jsxRuntime.jsx(Card.Card, { children: jsxRuntime.jsxs(reactLive.LiveProvider, { code: prettify(code), lang: language, scope: scope, theme: theme.theme, children: [jsxRuntime.jsxs("div", { className: "docs-p-[1rem]", children: [jsxRuntime.jsx(reactLive.LivePreview, {}), jsxRuntime.jsx(reactLive.LiveError, { className: "docs-text-[#df4b40]" })] }), jsxRuntime.jsx(reactLive.LiveEditor, { className: "docs-bg-neutral docs-p-[1rem] selection:docs-bg-[var(--color-neutral-hover)] selection:docs-bg-neutral-hover [&::-webkit-scrollbar]:docs-h-2 [&::-webkit-scrollbar]:docs-w-2 [&::-webkit-scrollbar-thumb]:docs-rounded-full [&::-webkit-scrollbar-thumb]:docs-bg-neutral-hover" })] }) }));
};

exports.Playground = Playground;
