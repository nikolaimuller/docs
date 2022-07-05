export const PageTitle: React.FC<{ children: string }> = ({ children }) => {
  return (
    <h1 className="docs-mb-3 docs-font-[var(--font-secondary)] docs-font-bold docs-text-4xl">
      {children}
    </h1>
  )
}
