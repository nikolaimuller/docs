/// <reference types="react" />
declare type PropType = string | {
    shortName: string;
    details: string;
};
export declare type PropsTableProps = {
    data: Array<{
        name: string;
        type: PropType;
        defaultValue?: string;
        required?: boolean;
    }>;
};
export declare const PropsTable: React.FC<PropsTableProps>;
export {};
