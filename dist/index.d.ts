import { Language, PrismTheme } from "prism-react-renderer";
import { LiveProviderProps } from "react-live";
export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
type Chapter = {
	id: string;
	title: string;
};
export type ChaptersContextProps = {
	chapters: Array<Chapter>;
	registerChapter: (payload: Chapter) => void;
	unregisterChapter: (id: string) => void;
};
export const ChaptersContext: import("react").Context<ChaptersContextProps>;
export const WithChapters: React.FC<{
	children: React.ReactNode;
}>;
export const useChapters: () => ChaptersContextProps;
export const Chapters: React.FC;
export type DocsProviderProps<T extends string> = {
	themes?: Record<T, Record<string, string>>;
	currentTheme?: T;
	children: React.ReactNode;
};
export const DocsProvider: <T extends string>({
	themes,
	currentTheme,
	children,
}: DocsProviderProps<T>) => React.ReactElement;
export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>>;
export const Page: React.FC<{
	children: React.ReactNode;
}>;
export const ListItem: React.FC<{
	children: React.ReactNode;
}>;
export const List: React.FC<{
	children: React.ReactNode;
}>;
export const PageTitle: React.FC<{
	children: string;
}>;
export const SectionTitle: React.FC<{
	children: string;
}>;
export const Paragraph: React.FC<{
	children: string;
}>;
type PropType =
	| string
	| {
			shortName: string;
			details: string;
	  };
export type PropsTableProps = {
	data: Array<{
		name: string;
		type: PropType;
		defaultValue?: string;
		required?: boolean;
	}>;
};
export const PropsTable: React.FC<PropsTableProps>;
type Swatch = {
	name: string;
	color: string;
};
export type ColorsTableProps = {
	palletes: Array<{
		title: string;
		swatches: Array<Swatch>;
	}>;
};
export const ColorsTable: React.FC<ColorsTableProps>;
export const Subtitle: React.FC<{
	children: string;
}>;
export const CodeSnippetTheme: PrismTheme;
export type CodeLanguage = Language;
export type CodeSnippetProps = {
	children: string;
	language: CodeLanguage;
};
export const CodeSnippet: React.FC<CodeSnippetProps>;
export const InlineCode: React.FC<{
	children: string;
}>;
export type PlaygroundProps = {
	code: string;
	language: CodeLanguage;
} & Pick<LiveProviderProps, "scope">;
export const Playground: React.FC<PlaygroundProps>;

//# sourceMappingURL=index.d.ts.map
