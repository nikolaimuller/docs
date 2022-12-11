import { useCallback, useEffect, useRef, useState } from 'react'

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
    <div className="docs-relative">
      <div ref={containerRef} style={{ display: 'contents' }}>
        <button
          tabIndex={0}
          onClick={() => toggleModal()}
          className="docs-text-primary docs-outline-none hover:docs-underline focus:docs-underline"
        >
          {type.shortName}
        </button>
        {isShowDetails && (
          <div className="docs-z-1 docs-absolute docs-mt-1 docs-rounded-md docs-bg-[color:var(--color-background-secondary)] docs-px-2 docs-py-1">
            <p className="docs-text-sm">{type.details}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export const PropsTable: React.FC<PropsTableProps> = ({ data = [] }) => {
  return (
    <div>
      <table className="docs-w-full">
        <thead>
          <tr>
            <th className="docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase">
              Name
            </th>
            <th className="docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase">
              Type
            </th>
            <th className="docs-px-2 docs-py-1.5 docs-text-left docs-text-sm docs-uppercase">
              Default
            </th>
          </tr>
        </thead>
        <tbody className="docs-divide-y docs-divide-neutral docs-rounded-[var(--ui-radius)] docs-shadow-[0_0_0_1px_var(--color-neutral)] ">
          {data.map(({ name, type, defaultValue, required }) => (
            <tr key={name}>
              <td className="docs-px-2 docs-py-1.5">
                {name}
                {required && <span>*</span>}
              </td>
              <td className="docs-px-2 docs-py-1.5">
                <TypeCell type={type} />
              </td>
              <td className="docs-px-2 docs-py-1.5 empty:before:docs-content-['-']">
                {defaultValue}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
