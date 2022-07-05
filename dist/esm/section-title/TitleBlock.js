/* @mullerstd/docs version: 0.0.1 */
import * as React from 'react';
import { useChapters } from '../chapters/ChaptersContext.js';

var SectionTitle = function (_a) {
    var title = _a.children;
    var _b = useChapters(), registerChapter = _b.registerChapter, unregisterChapter = _b.unregisterChapter;
    var id = React.useMemo(function () { return title.toLowerCase().split(' ').join('-'); }, [title]);
    React.useEffect(function () {
        registerChapter({ id: id, title: title });
        return function () {
            unregisterChapter(id);
        };
    }, [id, registerChapter, title, unregisterChapter]);
    return (React.createElement("h2", { id: id, className: 'section-title' }, title));
};

export { SectionTitle };
