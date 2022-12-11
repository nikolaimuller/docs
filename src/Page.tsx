export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="docs-min-h-screen docs-bg-[color:var(--color-background-primary)] docs-py-12 docs-font-primary docs-text-[color:var(--color-text-primary)]">
      <div className="docs-mx-auto docs-max-w-6xl docs-px-4">{children}</div>
    </div>
  )
}
