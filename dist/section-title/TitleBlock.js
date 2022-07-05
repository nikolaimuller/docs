/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var ChaptersContext = require('../chapters/ChaptersContext.js');

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

var SectionTitle = function (_a) {
    var title = _a.children;
    var _b = ChaptersContext.useChapters(), registerChapter = _b.registerChapter, unregisterChapter = _b.unregisterChapter;
    var id = React__namespace.useMemo(function () { return title.toLowerCase().split(' ').join('-'); }, [title]);
    React__namespace.useEffect(function () {
        registerChapter({ id: id, title: title });
        return function () {
            unregisterChapter(id);
        };
    }, [id, registerChapter, title, unregisterChapter]);
    return (React__namespace.createElement("h2", { id: id, className: 'section-title' }, title));
};

exports.SectionTitle = SectionTitle;
