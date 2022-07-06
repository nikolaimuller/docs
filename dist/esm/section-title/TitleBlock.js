/* @mullerstd/docs version: 0.0.2 */
import { jsx } from 'react/jsx-runtime';
import { useMemo, useEffect } from 'react';
import { useChapters } from '../chapters/ChaptersContext.js';

const SectionTitle = ({ children: title }) => {
    const { registerChapter, unregisterChapter } = useChapters();
    const id = useMemo(() => title.toLowerCase().split(' ').join('-'), [title]);
    useEffect(() => {
        registerChapter({ id, title });
        return () => {
            unregisterChapter(id);
        };
    }, [id, registerChapter, title, unregisterChapter]);
    return (jsx("h2", { id: id, className: "docs-mt-9 docs-mb-5 docs-border-b-[2px] docs-border-current docs-pb-1 docs-text-2xl docs-font-bold", children: title }));
};

export { SectionTitle };
