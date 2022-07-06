/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';
import { createElement } from 'react';
import Highlight, { Prism } from 'prism-react-renderer';
import prettier from 'prettier/standalone';
import babylon from 'prettier/parser-babel';
import { Card } from '../card/Card.js';
import { theme } from './theme.js';

const CodeSnippet = ({ children: code, language }) => {
    const prettify = (code) => {
        return prettier
            .format(code, {
            parser: 'babel',
            plugins: [babylon],
        })
            .trim();
    };
    return (jsx(Card, { children: jsx(Highlight, { Prism: Prism, code: prettify(code), language: language, theme: theme, children: ({ tokens, getLineProps, getTokenProps }) => (jsx("pre", { className: "docs-bg-neutral docs-p-[1rem] docs-font-code selection:docs-bg-[color:var(--color-neutral-hover)]", children: tokens.map((line, key) => (createElement("div", { ...getLineProps({ line }), key: key }, line.map((token, key) => (createElement("span", { ...getTokenProps({ token }), key: key })))))) })) }) }));
};

export { CodeSnippet };
