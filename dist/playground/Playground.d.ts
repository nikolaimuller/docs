/// <reference types="react" />
import { LiveProviderProps } from 'react-live';
export declare type PlaygroundProps = {
    code: string;
} & Pick<LiveProviderProps, 'language' | 'scope'>;
export declare const Playground: React.FC<PlaygroundProps>;
