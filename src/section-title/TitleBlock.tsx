import { useEffect, useMemo } from 'react'

import { useChapters } from '../chapters/ChaptersContext'

export const SectionTitle: React.FC<{ children: string }> = ({ children: title }) => {
  const { registerChapter, unregisterChapter } = useChapters()
  const id = useMemo(() => title.toLowerCase().split(' ').join('-'), [title])

  useEffect(() => {
    registerChapter({ id, title })

    return () => {
      unregisterChapter(id)
    }
  }, [id, registerChapter, title, unregisterChapter])

  return (
    <h2
      id={id}
      className="docs-pb-1 docs-border-current docs-border-b-[2px] docs-mt-7 docs-mb-5 docs-text-2xl docs-font-bold"
    >
      {title}
    </h2>
  )
}
