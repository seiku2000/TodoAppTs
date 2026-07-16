import { Todo } from "../../models";

export interface RenderTodoInterface {
    (elementId: string, todos: Todo[]): void;
}
export interface CreateTodoHtmlInterface {
    (todo:Todo):HTMLLIElement

}
export interface RenderPendingInterface {
    (elementId?: string): void;
}
