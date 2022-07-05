/* @mullerstd/docs version: 0.0.1 */
import * as React from 'react';
import { Link } from '../link/Link.js';
import { useChapters } from './ChaptersContext.js';

var Chapters = function () {
    var chapters = useChapters().chapters;
    if (chapters.length === 0)
        return null;
    return (React.createElement("ul", { className: 'chapters' }, chapters.map(function (_a, idx) {
        var title = _a.title, id = _a.id;
        return (React.createElement("li", { key: idx, className: 'chapter' },
            React.createElement(Link, { href: "#".concat(id), target: "_self" }, title)));
    })));
};

export { Chapters };
