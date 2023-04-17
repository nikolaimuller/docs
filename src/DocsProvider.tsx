import { useEffect, useRef } from "react";

import { WithChapters } from "./Chapters";

import "./styles/main.css";

export type DocsProviderProps<T extends string> = {
	themes?: Record<T, Record<string, string>>;
	currentTheme?: T;
	children: React.ReactNode;
};

const defaultTheme = {
	"ui-radius": "4px",
	// main colors
	"color-accent": "#1061ff",
	"color-background-primary": "#ffffff",
	"color-background-secondary": "#eaeaea",
	"color-text-primary": "#000000",
	"color-text-secondary": "#5e5e5e",
	"color-neutral": "#eef0f1",
	"color-neutral-hover": "#d7d7d7",
	// code colors
	"color-code-01": "var(--color-text-secondary)",
	"color-code-02": "#9090909c",
	"color-code-03": "#be4678",
	"color-code-04": "#aa573c",
	"color-code-05": "#a06e3b",
	"color-code-06": "#2a9292",
	"color-code-07": "#398bc6",
	"color-code-08": "#576ddb",
	"color-code-09": "#955ae7",
	// typography
	"font-primary": "sans-serif",
	"font-secondary": "inherit",
	"font-code": '"Monaco"',
};

export const DocsProvider = <T extends string>({
	themes,
	currentTheme,
	children,
}: DocsProviderProps<T>): React.ReactElement => {
	const docsRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const theme =
			themes && currentTheme
				? Object.assign(defaultTheme, themes[currentTheme])
				: defaultTheme;

		Object.entries(theme).map(([key, value]) => {
			docsRef.current?.style.setProperty(`--${key}`, value);
		});
	}, [currentTheme, themes]);

	return (
		<WithChapters>
			<div ref={docsRef}>{children}</div>
		</WithChapters>
	);
};
