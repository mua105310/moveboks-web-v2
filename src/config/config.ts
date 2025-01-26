// src/config/config.ts

export interface AppConfig {
  API_ENDPOINT: string;
  baseUrl?: string;
}

const productionConfig: AppConfig = {
  API_ENDPOINT: 'https://moveboks.dk/v1',
  baseUrl: 'https://moveboks.dk',
};

const localConfig: AppConfig = {
  API_ENDPOINT: 'http://127.0.0.1:3000/v1',
  baseUrl: 'http://localhost:3000/',
};

const isProduction = process.env.NODE_ENV === 'production';

export const config: AppConfig = isProduction ? productionConfig : localConfig;
