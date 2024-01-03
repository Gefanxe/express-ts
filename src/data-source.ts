import "reflect-metadata";
import { DataSource } from "typeorm";
import { TodoList } from "./entity/TodoList";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    synchronize: true, // 開啟此項, 若資料庫不存在表, 會從 entity 建立
    logging: false,
    entities: [TodoList],
    migrations: [],
    subscribers: [],
    timezone: "+00:00",
    // timezone: 'Z'
});
