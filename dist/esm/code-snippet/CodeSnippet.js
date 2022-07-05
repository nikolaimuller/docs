/* @mullerstd/docs version: 0.0.1 */
import { __assign } from '../_virtual/_tslib.js';
import * as React from 'react';
import Highlight, { Prism } from 'prism-react-renderer';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babel';
import { Card } from '../card/Card.js';
import { theme } from './theme.js';

var CodeSnippet = function (_a) {
    var code = _a.children, language = _a.language;
    var prettify = function (code) {
        return prettier
            .format(code, {
            parser: 'babel',
            plugins: [babylon],
        })
            .trim();
    };
    return (React.createElement(Card, null,
        React.createElement(Highlight, { Prism: Prism, code: prettify(code), language: language, theme: theme }, function (_a) {
            var tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
            return (React.createElement("pre", { className: 'code' }, tokens.map(function (line, key) { return (React.createElement("div", __assign({}, getLineProps({ line: line }), { key: key }), line.map(function (token, key) { return (React.createElement("span", __assign({}, getTokenProps({ token: token }), { key: key }))); }))); })));
        })));
};

export { CodeSnippet };
