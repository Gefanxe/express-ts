declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'local' | 'qat' | 'development' | 'production';
            MY_VAR: string;
            SERVICE_PORT: string;
            DATABASE_HOST: string;
            DATABASE_PORT: string;
            DATABASE_USER: string;
            DATABASE_PASS: string;
            DATABASE_NAME: string;
            [key: string]: string;
        }
    }
}

export { }