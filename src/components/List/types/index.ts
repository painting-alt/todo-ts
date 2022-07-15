export type TodoType = {
    id:string,
    current:any,
    editing: boolean
};

export interface ListProps {
todos: TodoType[],
edit: (todo: TodoType)=>void
updateContent:(id:string,event:any)=>void,
handleKeyUp: (todo:TodoType,event:any)=>void
}