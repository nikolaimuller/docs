import * as React from 'react'

export const Paragraph: React.FC<{ children: string }> = ({ children }) => {
  return <p className={'paragraph'}>{children}</p>
}
