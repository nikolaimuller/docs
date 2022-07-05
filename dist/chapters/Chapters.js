/* @mullerstd/docs version: 0.0.1 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var Link = require('../link/Link.js');
var ChaptersContext = require('./ChaptersContext.js');

const Chapters = () => {
    const { chapters } = ChaptersContext.useChapters();
    if (chapters.length === 0)
        return null;
    return (jsxRuntime.jsx("ul", { className: 'chapters', children: chapters.map(({ title, id }, idx) => (jsxRuntime.jsx("li", { className: 'chapter', children: jsxRuntime.jsx(Link.Link, { href: `#${id}`, target: "_self", children: title }) }, idx))) }));
};

exports.Chapters = Chapters;
