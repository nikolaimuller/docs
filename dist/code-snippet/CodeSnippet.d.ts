import * as React from 'react';
import { Language } from 'prism-react-renderer';
export declare type CodeSnippetProps = {
    children: string;
    language: Language;
};
export declare const CodeSnippet: React.FC<CodeSnippetProps>;
