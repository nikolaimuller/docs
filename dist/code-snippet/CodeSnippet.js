/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');
var Highlight = require('prism-react-renderer');
var prettier = require('prettier/standalone');
var babylon = require('prettier/parser-babel');
var Card = require('../card/Card.js');
var theme = require('./theme.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Highlight__default = /*#__PURE__*/_interopDefaultLegacy(Highlight);
var prettier__default = /*#__PURE__*/_interopDefaultLegacy(prettier);
var babylon__default = /*#__PURE__*/_interopDefaultLegacy(babylon);

var CodeSnippet = function (_a) {
    var code = _a.children, language = _a.language;
    var prettify = function (code) {
        return prettier__default["default"]
            .format(code, {
            parser: 'babel',
            plugins: [babylon__default["default"]],
        })
            .trim();
    };
    return (React__namespace.createElement(Card.Card, null,
        React__namespace.createElement(Highlight__default["default"], { Prism: Highlight.Prism, code: prettify(code), language: language, theme: theme.theme }, function (_a) {
            var tokens = _a.tokens, getLineProps = _a.getLineProps, getTokenProps = _a.getTokenProps;
            return (React__namespace.createElement("pre", { className: 'code' }, tokens.map(function (line, key) { return (React__namespace.createElement("div", _tslib.__assign({}, getLineProps({ line: line }), { key: key }), line.map(function (token, key) { return (React__namespace.createElement("span", _tslib.__assign({}, getTokenProps({ token: token }), { key: key }))); }))); })));
        })));
};

exports.CodeSnippet = CodeSnippet;
