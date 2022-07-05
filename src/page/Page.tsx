import * as React from 'react'

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={'page'}>
      <div className={'page-container'}>{children}</div>
    </div>
  )
}
