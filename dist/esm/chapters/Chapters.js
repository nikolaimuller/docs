/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';
import { Link } from '../link/Link.js';
import { useChapters } from './ChaptersContext.js';

const Chapters = () => {
    const { chapters } = useChapters();
    if (chapters.length === 0)
        return null;
    return (jsx("ul", { className: "docs-my-4 docs-space-y-1", children: chapters.map(({ title, id }, idx) => (jsx("li", { className: "docs-text-lg", children: jsx(Link, { href: `#${id}`, target: "_self", children: title }) }, idx))) }));
};

export { Chapters };
