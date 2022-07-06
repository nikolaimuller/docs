/// <reference types="react" />
import { Language } from 'prism-react-renderer';
export declare type CodeLanguage = Language;
export declare type CodeSnippetProps = {
    children: string;
    language: CodeLanguage;
};
export declare const CodeSnippet: React.FC<CodeSnippetProps>;
export declare const InlineCode: React.FC<{
    children: string;
}>;
