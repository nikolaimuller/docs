import * as React from 'react'

export const Subtitle: React.FC<{ children: string }> = ({ children }) => {
  return <h3 className={'subtitle'}>{children}</h3>
}
