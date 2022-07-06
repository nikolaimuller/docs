/// <reference types="react" />
export declare type DocsProviderProps<T extends string> = {
    themes?: Record<T, Record<string, string>>;
    currentTheme?: T;
    children: React.ReactNode;
};
export declare const DocsProvider: <T extends string>({ themes, currentTheme, children, }: DocsProviderProps<T>) => React.ReactElement;
