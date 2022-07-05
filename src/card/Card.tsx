import cx from 'classnames'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={cx(
        'docs-overflow-hidden docs-rounded-[var(--ui-radius)] docs-shadow-[0_0_0_1px_var(--color-neutral)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
