export interface ToDo {
    toDoId: number;
    title: string;
    description: string | undefined;
    deadline: string | undefined;
    creationDate: string;
    completedDate: string | undefined;
    isCompleted: boolean;
    categoryId: number;
}