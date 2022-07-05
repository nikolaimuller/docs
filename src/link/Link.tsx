import * as React from 'react'

export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a className={'link'} {...props}>
      {children}
    </a>
  )
}
