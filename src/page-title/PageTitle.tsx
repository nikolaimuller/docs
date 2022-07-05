import * as React from 'react'

export const PageTitle: React.FC<{ children: string }> = ({ children }) => {
  return <h1 className={'page-title'}>{children}</h1>
}
