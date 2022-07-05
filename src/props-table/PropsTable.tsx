import { useCallback, useEffect, useRef, useState } from 'react'

import styles from './props-table.module.css'

type PropType = string | { shortName: string; details: string }

export type PropsTableProps = {
  data: Array<{
    name: string
    type: PropType
    defaultValue?: string
    required?: boolean
  }>
}

type UseClickOutside = (
  ref: React.MutableRefObject<HTMLElement | null>,
  handler: () => void,
) => void

const useClickOutside: UseClickOutside = (ref, handler) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref.current && event.target) {
        !ref.current.contains(event.target as Node) && handler()
      }
    },
    [handler, ref],
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [handleClick])
}

const TypeCell: React.FC<{ type: PropType }> = ({ type }) => {
  const [isShowDetails, setShowDetails] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const closeModal = (): void => {
    setShowDetails(false)
  }

  const toggleModal = (): void => {
    setShowDetails((prev) => !prev)
  }

  useClickOutside(containerRef, closeModal)

  if (typeof type === 'string') return <div>{type}</div>

  return (
    <div className={styles['props-table-cell']}>
      <div ref={containerRef} style={{ display: 'contents' }}>
        <button
          tabIndex={0}
          onClick={() => toggleModal()}
          className={styles['props-table-cell-trigger']}
        >
          {type.shortName}
        </button>
        {isShowDetails && (
          <div className={styles['props-table-popup']}>
            <p className={styles['props-table-popup-description']}>{type.details}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export const PropsTable: React.FC<PropsTableProps> = ({ data = [] }) => {
  return (
    <div className={styles['props-table']}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, type, defaultValue, required }) => (
            <tr key={name}>
              <td>
                {name}
                {required && <span>*</span>}
              </td>
              <td>
                <TypeCell type={type} />
              </td>
              <td>{defaultValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
