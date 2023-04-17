/// <reference types="react" />
import { LiveProviderProps } from "react-live";
import { CodeLanguage } from "./CodeSnippet";
export type PlaygroundProps = {
    code: string;
    language: CodeLanguage;
} & Pick<LiveProviderProps, "scope">;
export declare const Playground: React.FC<PlaygroundProps>;
