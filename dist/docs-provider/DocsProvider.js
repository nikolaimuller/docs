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

var defaultTheme = {
    'ui-radius': '4px',
    'color-accent': '#1061ff',
    'color-background-primary': '#ffffff',
    'color-background-secondary': '#eaeaea',
    'color-text-primary': '#000000',
    'color-text-secondary': '#565656',
    'color-neutral': '#eef0f1',
    'color-neutral-hover': '#dde0e3',
    'color-code-01': 'var(--color-text-secondary)',
    'color-code-02': '#9090909c',
    'color-code-03': '#be4678',
    'color-code-04': '#aa573c',
    'color-code-05': '#a06e3b',
    'color-code-06': '#2a9292',
    'color-code-07': '#398bc6',
    'color-code-08': '#576ddb',
    'color-code-09': '#955ae7',
    'font-primary': 'sans-serif',
    'font-secondary': 'inherit',
};
var DocsProvider = function (_a) {
    var themes = _a.themes, currentTheme = _a.currentTheme, children = _a.children;
    var docsRef = React__namespace.useRef(null);
    React__namespace.useEffect(function () {
        var theme = themes && currentTheme ? Object.assign(defaultTheme, themes[currentTheme]) : defaultTheme;
        Object.entries(theme).map(function (_a) {
            var _b;
            var key = _a[0], value = _a[1];
            (_b = docsRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty("--".concat(key), value);
        });
    }, [currentTheme, themes]);
    return (React__namespace.createElement(ChaptersContext.WithChapters, null,
        React__namespace.createElement("div", { ref: docsRef }, children)));
};

exports.DocsProvider = DocsProvider;
