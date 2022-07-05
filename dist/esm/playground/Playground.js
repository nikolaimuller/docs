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
    return (jsx(Card, { children: jsxs(LiveProvider, { code: prettify(code), lang: language, scope: scope, theme: theme, children: [jsxs("div", { className: "docs-p-[1rem]", children: [jsx(LivePreview, {}), jsx(LiveError, { className: "docs-text-[#df4b40]" })] }), jsx(LiveEditor, { className: "selection:docs-bg-[var(--color-neutral-hover)] docs-bg-neutral docs-p-[1rem] selection:docs-bg-neutral-hover [&::-webkit-scrollbar]:docs-h-2 [&::-webkit-scrollbar]:docs-w-2 [&::-webkit-scrollbar-thumb]:docs-rounded-full [&::-webkit-scrollbar-thumb]:docs-bg-neutral-hover" })] }) }));
};

export { Playground };
