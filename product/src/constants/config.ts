import { ServiceType } from './enums';

/**
 * 설정 파일
 */
export interface Config {
    apis: { [key: string]: string };
    withCredentials: boolean;
    basicToken: string;
}

export const defaultConfig: Config = {
    apis: {
        todo: 'http://localhost:8080',
    },
    withCredentials: false,
    basicToken: '',
};

export const AppBase = {
    config: defaultConfig,
};

declare global {
    interface Window {
        env: Config;
    }
}

window.env = window.env || defaultConfig;
AppBase.config = { ...window.env };

export const todo = () => AppBase.config.apis[ServiceType.todo];
export const withCredentials = () => AppBase.config.withCredentials;
export const basicToken = () => AppBase.config.basicToken;
export const getBaseUrl = (type: ServiceType) => AppBase.config.apis[type];
