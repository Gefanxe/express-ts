import TodoController from "@/controller/todo/TodoController"
// import TestController from '@/controller/test/TestController';

export const Routes = [
    {
        method: "get",
        route: "/todo/list",
        controller: TodoController,
        action: "getList"
    },
    {
        method: "post",
        route: "/todo/add",
        controller: TodoController,
        action: "addList"
    },
    {
        method: "post",
        route: "/todo/update",
        controller: TodoController,
        action: "updateList"
    },
    {
        method: "post",
        route: "/todo/delete",
        controller: TodoController,
        action: "deleteList"
    },
]