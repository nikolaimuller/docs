/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Link = require('../link/Link.js');
var ChaptersContext = require('./ChaptersContext.js');

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

var Chapters = function () {
    var chapters = ChaptersContext.useChapters().chapters;
    if (chapters.length === 0)
        return null;
    return (React__namespace.createElement("ul", { className: 'chapters' }, chapters.map(function (_a, idx) {
        var title = _a.title, id = _a.id;
        return (React__namespace.createElement("li", { key: idx, className: 'chapter' },
            React__namespace.createElement(Link.Link, { href: "#".concat(id), target: "_self" }, title)));
    })));
};

exports.Chapters = Chapters;
