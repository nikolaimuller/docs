/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useState, useCallback } from 'react';

const ChaptersContext = createContext({
    chapters: [],
    registerChapter: () => null,
    unregisterChapter: () => null,
});
const WithChapters = ({ children }) => {
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

export { ChaptersContext, WithChapters, useChapters };
