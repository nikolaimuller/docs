/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var Chapters = require('./Chapters.js');

const SectionTitle = ({ children: title, }) => {
    const { registerChapter, unregisterChapter } = Chapters.useChapters();
    const id = react.useMemo(() => title.toLowerCase().split(" ").join("-"), [title]);
    react.useEffect(() => {
        registerChapter({ id, title });
        return () => {
            unregisterChapter(id);
        };
    }, [id, registerChapter, title, unregisterChapter]);
    return (jsxRuntime.jsx("h2", { id: id, className: "docs-mt-9 docs-mb-5 docs-border-b-[2px] docs-border-current docs-pb-1 docs-text-2xl docs-font-bold", children: title }));
};

exports.SectionTitle = SectionTitle;