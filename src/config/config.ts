// src/config/config.ts

export interface AppConfig {
  baseUrl: string;
}

const productionConfig: AppConfig = {
  baseUrl: 'https://moveboks.dk/v1',
};

const localConfig: AppConfig = {
  baseUrl: 'http://127.0.0.1:3000/v1',
};

const isProduction = process.env.NODE_ENV === 'production';

export const config: AppConfig = isProduction ? productionConfig : localConfig;
