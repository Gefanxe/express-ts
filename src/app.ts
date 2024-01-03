import '@/utils/envConfig';

import path from "path";
import { AppDataSource } from "@/data-source"
import express, { Application, Request, Response } from 'express';
import bodyParser from "body-parser";
import { Routes } from "@/routes"
import packageJson from '../package.json';

// 等待 data source 初始
(async function () {
    try {
        await AppDataSource.initialize();
    } catch (error) {
        console.log('init datasource error:', error);
        process.exit(1);
    }
}());

const app: Application = express();

const port: number = Number(process.env.SERVICE_PORT) || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
    express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

// response add version attribute
app.use((req, res, next) => {
    const oldJson = res.json;
    res.json = function (jsonData) {
        jsonData.version = packageJson.version;
        oldJson.call(res, jsonData);
    } as any;
    next();
});

// register express routes from defined application routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next)
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined)

        } else if (result !== null && result !== undefined) {
            res.json(result)
        }
    })
})

// test
// app.get('/test', (req: Request, res: Response) => { res.json({ result: 'ok' }); });

app.listen(port, '0.0.0.0', function () {
    console.log(`App is listening on port ${port} !`);
});
