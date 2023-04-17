/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useCallback, useContext } from 'react';
import { Link } from './Link.js';

const ChaptersContext = createContext({
    chapters: [],
    registerChapter: () => null,
    unregisterChapter: () => null,
});
const WithChapters = ({ children, }) => {
    const [chapters, setChapters] = useState([]);
    const registerChapter = useCallback((payload) => {
        setChapters((prev) => [...prev, payload]);
    }, []);
    const unregisterChapter = useCallback((id) => {
        setChapters((prev) => [...prev.filter((chapter) => chapter.id !== id)]);
    }, []);
    return (jsx(ChaptersContext.Provider, { value: { chapters, registerChapter, unregisterChapter }, children: children }));
};
const useChapters = () => useContext(ChaptersContext);
const Chapters = () => {
    const { chapters } = useChapters();
    if (chapters.length === 0)
        return null;
    return (jsx("ul", { className: "docs-my-4 docs-space-y-1", children: chapters.map(({ title, id }, idx) => (jsx("li", { className: "docs-text-lg", children: jsx(Link, { href: `#${id}`, target: "_self", children: title }) }, String(idx)))) }));
};

export { Chapters, ChaptersContext, WithChapters, useChapters };
