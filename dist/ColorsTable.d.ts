/// <reference types="react" />
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
export declare const ColorsTable: React.FC<ColorsTableProps>;
export {};
