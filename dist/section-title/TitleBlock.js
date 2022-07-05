/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var ChaptersContext = require('../chapters/ChaptersContext.js');

const SectionTitle = ({ children: title }) => {
    const { registerChapter, unregisterChapter } = ChaptersContext.useChapters();
    const id = react.useMemo(() => title.toLowerCase().split(' ').join('-'), [title]);
    react.useEffect(() => {
        registerChapter({ id, title });
        return () => {
            unregisterChapter(id);
        };
    }, [id, registerChapter, title, unregisterChapter]);
    return (jsxRuntime.jsx("h2", { id: id, className: "docs-pb-1 docs-border-current docs-border-b-[2px] docs-mt-7 docs-mb-5 docs-text-2xl docs-font-bold", children: title }));
};

exports.SectionTitle = SectionTitle;
