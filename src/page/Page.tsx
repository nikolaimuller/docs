export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="docs-py-12 docs-min-h-screen docs-bg-[color:var(--color-background-primary)] docs-text-[color:var(--color-text-primary)] docs-font-primary">
      <div className="docs-max-w-6xl docs-px-4 docs-mx-auto">{children}</div>
    </div>
  )
}
