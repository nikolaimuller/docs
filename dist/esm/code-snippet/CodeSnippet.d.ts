/// <reference types="react" />
import { Language } from 'prism-react-renderer';
export type CodeLanguage = Language;
export type CodeSnippetProps = {
    children: string;
    language: CodeLanguage;
};
export declare const CodeSnippet: React.FC<CodeSnippetProps>;
export declare const InlineCode: React.FC<{
    children: string;
}>;
