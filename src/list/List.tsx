import React from 'react'

export const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul className="docs-space-y-1 docs-list-disc docs-pl-6 docs-my-4">{children}</ul>
}
