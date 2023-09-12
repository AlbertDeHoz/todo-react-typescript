import React, { createContext,useState } from "react";
import {useLocalStorage} from "./useLocalStorage"
import { Task } from "../interfaces"

interface IValue {
    loading: boolean;
    totalTodos: number;
    completedTodos: number;
    searchTodo: (e: React.FormEvent<HTMLInputElement>) => void;
    todoSearched: string;
    todosRendered: Task[];
    toggleTodoStatus: (id:number) => void;
    removeTodo: (id:number) => void;
    addTodo: (todoDescription: string) => void;
    editTodo: (editedTodo: Task) => void;

}
const DefaultValues:IValue = {
    addTodo: () => null,
    editTodo: () => null,
    loading: true,
    totalTodos: 0,
    completedTodos: 0,
    searchTodo: () => 0,
    todoSearched: '',
    todosRendered: [],
    toggleTodoStatus: () => 0,
    removeTodo: () => 0
}

const TodoContext = createContext<IValue>(DefaultValues);

const TodoProvider = ({ children }: any) => {
    const storage_values = useLocalStorage();
    const { item: todos, saveItem: saveTodos, loading } = storage_values;
    const [todoSearched, setTodoSearched] = useState<string>("");
    const totalTodos: number = todos.length;
    const completedTodos: number = todos.reduce(
        (acc, todo) => acc + (todo.status ? 1 : 0),
        0
    );
    const todosRendered: Task[] = todos.filter((todo) => {
        const description: string = todo.description.toLowerCase();
        const search: string = todoSearched.toLowerCase();
        return description.includes(search);
    });

    const addTodo = (todoDescription: string) => {
        const todo = {
          id:todos.length,
          description: todoDescription,
          status: false
        };
        saveTodos([...todos, todo]);
        
    }

    const searchTodo = (e: React.FormEvent<HTMLInputElement>): void => {
        const { value } = e.target as HTMLInputElement;
        setTodoSearched(value);
    };
    const toggleTodoStatus = (id: number) => {
        const todosUpToDate: Task[] = todos.map((todo) =>
            todo.id === id ? { ...todo, status: !todo.status } : { ...todo }
        );
        saveTodos(todosUpToDate);
    };

    const editTodo = (todoEdited: Task) => {
        const todoList = todos.map((todo) => todo.id === todoEdited.id ? todoEdited : todo);
        saveTodos(todoList);
    }

    const removeTodo = (id: number): void => {
        const index: number = todos.findIndex((todo) => todo.id === id);
        const todosUpToDate: Task[] = todos.map((todo) => ({ ...todo }));
        todosUpToDate.splice(index, 1);
        saveTodos(todosUpToDate);
    };
    return (
        <TodoContext.Provider value={{
            editTodo,
            addTodo,
            loading,
            totalTodos,            
            completedTodos,            
            searchTodo,
            todoSearched,            
            todosRendered,            
            toggleTodoStatus,
            removeTodo,
        }}>{children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider }
