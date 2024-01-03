import { AppDataSource } from "../../data-source";
import { NextFunction, Request, Response } from "express";
import { TodoList } from '../../entity/TodoList';

export default class TodoController {

    async getList(req: Request, res: Response, next: NextFunction) {
        const _identifyId = req.query.identifyId as string;

        const todoListRepository = AppDataSource.getRepository(TodoList);
        const [allTodo, totoCounts] = await todoListRepository.findAndCount({
            where: { identifyId: _identifyId },
        })

        return { list: allTodo, total: totoCounts };
    }

    async addList(req: Request, res: Response, next: NextFunction) {
        const _identifyId = req.body.identifyId;
        const _id = req.body.id;
        const _value = req.body.value;
        const _completed = false;

        const todoListRepository = AppDataSource.getRepository(TodoList);
        const _result = await todoListRepository.insert({
            identifyId: _identifyId,
            id: _id,
            value: _value,
            completed: _completed,
        });

        if (_result.identifiers.length > 0) {
            return { result: 'ok' };
        } else {
            return { result: 'fail' };
        }
    }

    async updateList(req: Request, res: Response, next: NextFunction) {
        const _identifyId = req.body.identifyId;
        const _id = req.body.id;
        let keyName: string, _value: string | boolean;

        if (req.body.value) {
            keyName = 'value';
            _value = req.body.value;
        } else {
            keyName = 'completed';
            _value = req.body.completed
        }

        const todoListRepository = AppDataSource.getRepository(TodoList);
        const _result = await todoListRepository.update({ identifyId: _identifyId, id: _id }, {
            [keyName]: _value
        });

        if (_result.affected > 0) {
            return { result: 'ok' };
        } else {
            return { result: 'fail' };
        }
    }

    async deleteList(req: Request, res: Response, next: NextFunction) {
        const _identifyId = req.body.identifyId;
        const _id = req.body.id;
        const todoListRepository = AppDataSource.getRepository(TodoList);
        const _result = await todoListRepository.softDelete(
            {
                identifyId: _identifyId,
                id: _id,
            }
        );

        if (_result.affected > 0) {
            return { result: 'ok' };
        } else {
            return { result: 'fail' };
        }
    }

}