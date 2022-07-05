/* @mullerstd/docs version: 0.0.1 */
import * as React from 'react';
import { LiveProvider, LivePreview, LiveError, LiveEditor } from 'react-live';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babel';
import { Card } from '../card/Card.js';
import { theme } from '../code-snippet/theme.js';

var Playground = function (_a) {
    var code = _a.code, language = _a.language, scope = _a.scope;
    var prettify = function (code) {
        return prettier
            .format(code, {
            parser: 'babel',
            plugins: [babylon],
            singleQuote: true,
        })
            .trim();
    };
    return (React.createElement(Card, { className: 'playground' },
        React.createElement(LiveProvider, { code: prettify(code), lang: language, scope: scope, theme: theme },
            React.createElement("div", { className: 'preview' },
                React.createElement(LivePreview, null),
                React.createElement(LiveError, { className: 'error' })),
            React.createElement(LiveEditor, { className: 'code' }))));
};

export { Playground };
