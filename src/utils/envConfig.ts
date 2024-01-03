import path from 'path';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

function setEnv() {
    if (!process.env.NODE_ENV) return {};

    const envOption: dotenv.DotenvConfigOptions = {};
    envOption.path = `${path.resolve('./')}/${`.env.${process.env.NODE_ENV}`}`;
    return dotenvExpand.expand(dotenv.config(envOption));
}

const myEnv = setEnv();

export default myEnv;
