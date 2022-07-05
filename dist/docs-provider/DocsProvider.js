/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var ChaptersContext = require('../chapters/ChaptersContext.js');

const defaultTheme = {
    'ui-radius': '4px',
    'color-accent': '#1061ff',
    'color-background-primary': '#ffffff',
    'color-background-secondary': '#eaeaea',
    'color-text-primary': '#000000',
    'color-text-secondary': '#565656',
    'color-neutral': '#eef0f1',
    'color-neutral-hover': '#d7d7d7',
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
    'font-code': '"Monaco"',
};
const DocsProvider = ({ themes, currentTheme, children, }) => {
    const docsRef = react.useRef(null);
    react.useEffect(() => {
        const theme = themes && currentTheme ? Object.assign(defaultTheme, themes[currentTheme]) : defaultTheme;
        Object.entries(theme).map(([key, value]) => {
            docsRef.current?.style.setProperty(`--${key}`, value);
        });
    }, [currentTheme, themes]);
    return (jsxRuntime.jsx(ChaptersContext.WithChapters, { children: jsxRuntime.jsx("div", { ref: docsRef, children: children }) }));
};

exports.DocsProvider = DocsProvider;
