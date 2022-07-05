import * as React from 'react'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={['card', className].join(' ')} {...props}>
      {children}
    </div>
  )
}
