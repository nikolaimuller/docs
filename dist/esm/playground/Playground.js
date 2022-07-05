/* @mullerstd/docs version: 0.0.1 */
import { jsx, jsxs } from 'react/jsx-runtime';
import { LiveProvider, LivePreview, LiveError, LiveEditor } from 'react-live';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babel';
import { Card } from '../card/Card.js';
import { theme } from '../code-snippet/theme.js';

const Playground = ({ code, language, scope }) => {
    const prettify = (code) => {
        return prettier
            .format(code, {
            parser: 'babel',
            plugins: [babylon],
            singleQuote: true,
        })
            .trim();
    };
    return (jsx(Card, { className: 'playground', children: jsxs(LiveProvider, { code: prettify(code), lang: language, scope: scope, theme: theme, children: [jsxs("div", { className: 'preview', children: [jsx(LivePreview, {}), jsx(LiveError, { className: 'error' })] }), jsx(LiveEditor, { className: 'code' })] }) }));
};

export { Playground };
