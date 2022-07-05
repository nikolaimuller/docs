/* @mullerstd/docs version: 0.0.1 */
import { jsx } from 'react/jsx-runtime';
import { Link } from '../link/Link.js';
import { useChapters } from './ChaptersContext.js';

const Chapters = () => {
    const { chapters } = useChapters();
    if (chapters.length === 0)
        return null;
    return (jsx("ul", { className: 'chapters', children: chapters.map(({ title, id }, idx) => (jsx("li", { className: 'chapter', children: jsx(Link, { href: `#${id}`, target: "_self", children: title }) }, idx))) }));
};

export { Chapters };
