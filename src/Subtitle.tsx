export const Subtitle: React.FC<{ children: string }> = ({ children }) => {
	return (
		<h3 className="docs-mt-3 docs-mb-2 docs-text-lg docs-font-bold">
			{children}
		</h3>
	);
};
