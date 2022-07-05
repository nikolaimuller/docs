import * as React from 'react';
declare type Swatch = {
    name: string;
    color: string;
};
export declare type ColorsTableProps = {
    palletes: Array<{
        title: string;
        swatches: Array<Swatch>;
    }>;
};
export declare const ColorsTable: React.FC<ColorsTableProps>;
export {};
