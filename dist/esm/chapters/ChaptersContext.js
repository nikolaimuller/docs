/* @mullerstd/docs version: 0.0.1 */
import { __spreadArray } from '../_virtual/_tslib.js';
import * as React from 'react';

var ChaptersContext = React.createContext({
    chapters: [],
    registerChapter: function () { return null; },
    unregisterChapter: function () { return null; },
});
var WithChapters = function (_a) {
    var children = _a.children;
    var _b = React.useState([]), chapters = _b[0], setChapters = _b[1];
    var registerChapter = React.useCallback(function (payload) {
        setChapters(function (prev) { return __spreadArray(__spreadArray([], prev, true), [payload], false); });
    }, []);
    var unregisterChapter = React.useCallback(function (id) {
        setChapters(function (prev) { return __spreadArray([], prev.filter(function (chapter) { return chapter.id !== id; }), true); });
    }, []);
    return (React.createElement(ChaptersContext.Provider, { value: { chapters: chapters, registerChapter: registerChapter, unregisterChapter: unregisterChapter } }, children));
};
var useChapters = function () { return React.useContext(ChaptersContext); };

export { ChaptersContext, WithChapters, useChapters };
