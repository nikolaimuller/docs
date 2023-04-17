export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
	children,
	...props
}) => {
	return (
		<a
			className="docs-text-primary docs-outline-none hover:docs-underline focus:docs-underline"
			{...props}
		>
			{children}
		</a>
	);
};
