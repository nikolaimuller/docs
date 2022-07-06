/* @mullerstd/docs version: 0.0.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ChaptersContext = react.createContext({
    chapters: [],
    registerChapter: () => null,
    unregisterChapter: () => null,
});
const WithChapters = ({ children }) => {
    const [chapters, setChapters] = react.useState([]);
    const registerChapter = react.useCallback((payload) => {
        setChapters((prev) => [...prev, payload]);
    }, []);
    const unregisterChapter = react.useCallback((id) => {
        setChapters((prev) => [...prev.filter((chapter) => chapter.id !== id)]);
    }, []);
    return (jsxRuntime.jsx(ChaptersContext.Provider, { value: { chapters, registerChapter, unregisterChapter }, children: children }));
};
const useChapters = () => react.useContext(ChaptersContext);

exports.ChaptersContext = ChaptersContext;
exports.WithChapters = WithChapters;
exports.useChapters = useChapters;
