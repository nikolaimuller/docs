/// <reference types="react" />
import { Language, PrismTheme } from "prism-react-renderer";
export declare const CodeSnippetTheme: PrismTheme;
export type CodeLanguage = Language;
export type CodeSnippetProps = {
    children: string;
    language: CodeLanguage;
};
export declare const CodeSnippet: React.FC<CodeSnippetProps>;
export declare const InlineCode: React.FC<{
    children: string;
}>;
