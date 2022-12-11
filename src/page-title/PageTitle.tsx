export const PageTitle: React.FC<{ children: string }> = ({ children }) => {
  return (
    <h1 className="docs-mb-3 docs-text-4xl docs-font-[var(--font-secondary)] docs-font-bold">
      {children}
    </h1>
  )
}
