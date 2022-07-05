import * as React from 'react'

import { Link } from '../link'

import { useChapters } from './ChaptersContext'

// import styles from './chapters.module.css'

export const Chapters: React.FC = () => {
  const { chapters } = useChapters()

  if (chapters.length === 0) return null

  return (
    <ul className={'chapters'}>
      {chapters.map(({ title, id }, idx) => (
        <li key={idx} className={'chapter'}>
          <Link href={`#${id}`} target="_self">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
