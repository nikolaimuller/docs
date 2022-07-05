/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactLive = require('react-live');
var prettier = require('prettier/standalone');
var babylon = require('prettier/parser-babel');
var Card = require('../card/Card.js');
var theme = require('../code-snippet/theme.js');

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
var prettier__default = /*#__PURE__*/_interopDefaultLegacy(prettier);
var babylon__default = /*#__PURE__*/_interopDefaultLegacy(babylon);

var Playground = function (_a) {
    var code = _a.code, language = _a.language, scope = _a.scope;
    var prettify = function (code) {
        return prettier__default["default"]
            .format(code, {
            parser: 'babel',
            plugins: [babylon__default["default"]],
            singleQuote: true,
        })
            .trim();
    };
    return (React__namespace.createElement(Card.Card, { className: 'playground' },
        React__namespace.createElement(reactLive.LiveProvider, { code: prettify(code), lang: language, scope: scope, theme: theme.theme },
            React__namespace.createElement("div", { className: 'preview' },
                React__namespace.createElement(reactLive.LivePreview, null),
                React__namespace.createElement(reactLive.LiveError, { className: 'error' })),
            React__namespace.createElement(reactLive.LiveEditor, { className: 'code' }))));
};

exports.Playground = Playground;
