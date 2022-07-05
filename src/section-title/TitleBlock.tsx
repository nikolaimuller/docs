import { useEffect, useMemo } from 'react'
import { useChapters } from '../chapters/ChaptersContext'

// import styles from './section-title.module.css'

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
    <h2 id={id} className={'section-title'}>
      {title}
    </h2>
  )
}
