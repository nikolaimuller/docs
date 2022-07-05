export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a
      className="docs-text-primary hover:docs-underline focus:docs-underline docs-outline-none"
      {...props}
    >
      {children}
    </a>
  )
}
