import * as React from 'react';
declare type Chapter = {
    id: string;
    title: string;
};
export declare type ChaptersContextProps = {
    chapters: Array<Chapter>;
    registerChapter: (payload: Chapter) => void;
    unregisterChapter: (id: string) => void;
};
export declare const ChaptersContext: React.Context<ChaptersContextProps>;
export declare const WithChapters: React.FC<{
    children: React.ReactNode;
}>;
export declare const useChapters: () => ChaptersContextProps;
export {};
