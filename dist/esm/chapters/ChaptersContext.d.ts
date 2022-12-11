/// <reference types="react" />
type Chapter = {
    id: string;
    title: string;
};
export type ChaptersContextProps = {
    chapters: Array<Chapter>;
    registerChapter: (payload: Chapter) => void;
    unregisterChapter: (id: string) => void;
};
export declare const ChaptersContext: import("react").Context<ChaptersContextProps>;
export declare const WithChapters: React.FC<{
    children: React.ReactNode;
}>;
export declare const useChapters: () => ChaptersContextProps;
export {};
