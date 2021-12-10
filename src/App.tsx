import React, { useState } from "react";
import "./styles/App.css";
// import { TodoInput } from "./components/TodoInput";
import { TodoContainer } from "./components/TodoContainer";
import { TodoTask } from "./components/TodoTask";
import { TodoSearch } from "./components/TodoSearch";

interface Task {
    id: number;
    description: string;
    status: boolean;
}

// const tasks: Task[] = [
//     { id: 1, description: "First Task", status: true },
//     { id: 2, description: "Second Task", status: true },
//     { id: 3, description: "Third Task", status: false },
//     { id: 4, description: "Four Task", status: true },
// ];
//"[{\"id\":1,\"description\":\"First Task\",\"status\":true},{\"id\":2,\"description\":\"Second Task\",\"status\":true},{\"id\":3,\"description\":\"Third Task\",\"status\":false},{\"id\":4,\"description\":\"Four Task\",\"status\":true}]"
const App: React.FC = () => {
    const localStorageTodos = localStorage.getItem('TODOS_V1') as string;
    let parsedTodos: Task[] = !localStorageTodos?[]:JSON.parse(localStorageTodos);

    const [todos, setTodos] = useState<Task[]>(parsedTodos);
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

    const searchTodo = (e: React.FormEvent<HTMLInputElement>) => {
        const { value } = e.target as HTMLInputElement;
        setTodoSearched(value);
    };
    const toggleTodoStatus = (id: number) => {
        const todosUpToDate: Task[] = todos.map((todo) =>
            todo.id === id ? { ...todo, status: !todo.status } : { ...todo }
        );
        setTodos(todosUpToDate);
        setStoragedTodos(todosUpToDate);
    };

    const removeTodo = (id: number) => {
        const index: number = todos.findIndex((todo) => todo.id === id);
        const todosUpToDate: Task[] = todos.map((todo) => ({ ...todo }));
        todosUpToDate.splice(index, 1);
        setTodos(todosUpToDate);
        setStoragedTodos(todosUpToDate);
    };
    const setStoragedTodos = (todos:Task[]) => {
        const todosToString:string = JSON.stringify(todos);
        localStorage.setItem('TODOS_V1',todosToString);
    }
    return (
        <main className="App">
            <h1>Todo App</h1>
            <p style={{ color: "white" }}>
                {completedTodos} of {totalTodos} todos completed
            </p>
            {/* <TodoInput /> */}
            <TodoSearch handleSearch={searchTodo} search={todoSearched} />
            <TodoContainer>
                {todosRendered.map((todo) => (
                    <TodoTask
                        key={todo.id}
                        id={todo.id}
                        content={todo.description}
                        status={todo.status}
                        handleTodoStatus={(id: number) => toggleTodoStatus(id)}
                        handleTodoRemove={(id: number) => removeTodo(id)}
                    />
                ))}
            </TodoContainer>
        </main>
    );
};

export default App;
