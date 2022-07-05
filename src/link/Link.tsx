export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  ...props
}) => {
  return (
    <a className="tw-color-[var(--color-accent)] tw-font-semibold" {...props}>
      {children}
    </a>
  )
}
