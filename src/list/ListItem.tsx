import React from 'react'

export const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <li className="docs-text-lg">{children}</li>
}
