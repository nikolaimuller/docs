export const ListItem: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <li className="docs-text-base">{children}</li>;
};

export const List: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ul className="docs-my-4 docs-list-disc docs-space-y-1 docs-pl-6">
			{children}
		</ul>
	);
};
