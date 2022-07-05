/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.js');
var React = require('react');

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

var ChaptersContext = React__namespace.createContext({
    chapters: [],
    registerChapter: function () { return null; },
    unregisterChapter: function () { return null; },
});
var WithChapters = function (_a) {
    var children = _a.children;
    var _b = React__namespace.useState([]), chapters = _b[0], setChapters = _b[1];
    var registerChapter = React__namespace.useCallback(function (payload) {
        setChapters(function (prev) { return _tslib.__spreadArray(_tslib.__spreadArray([], prev, true), [payload], false); });
    }, []);
    var unregisterChapter = React__namespace.useCallback(function (id) {
        setChapters(function (prev) { return _tslib.__spreadArray([], prev.filter(function (chapter) { return chapter.id !== id; }), true); });
    }, []);
    return (React__namespace.createElement(ChaptersContext.Provider, { value: { chapters: chapters, registerChapter: registerChapter, unregisterChapter: unregisterChapter } }, children));
};
var useChapters = function () { return React__namespace.useContext(ChaptersContext); };

exports.ChaptersContext = ChaptersContext;
exports.WithChapters = WithChapters;
exports.useChapters = useChapters;
