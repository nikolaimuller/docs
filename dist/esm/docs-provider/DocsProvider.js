/* @mullerstd/docs version: 0.0.1 */
import * as React from 'react';
import { WithChapters } from '../chapters/ChaptersContext.js';

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
    var docsRef = React.useRef(null);
    React.useEffect(function () {
        var theme = themes && currentTheme ? Object.assign(defaultTheme, themes[currentTheme]) : defaultTheme;
        Object.entries(theme).map(function (_a) {
            var _b;
            var key = _a[0], value = _a[1];
            (_b = docsRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty("--".concat(key), value);
        });
    }, [currentTheme, themes]);
    return (React.createElement(WithChapters, null,
        React.createElement("div", { ref: docsRef }, children)));
};

export { DocsProvider };
