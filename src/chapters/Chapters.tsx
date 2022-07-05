import { Link } from '../link'

import { useChapters } from './ChaptersContext'

export const Chapters: React.FC = () => {
  const { chapters } = useChapters()

  if (chapters.length === 0) return null

  return (
    <ul className="docs-my-4 docs-space-y-1">
      {chapters.map(({ title, id }, idx) => (
        <li key={idx} className="docs-text-lg">
          <Link href={`#${id}`} target="_self">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
