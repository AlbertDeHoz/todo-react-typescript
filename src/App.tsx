import React from "react";
import "./styles/App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoContainer } from "./components/TodoContainer";
import { TodoTask } from "./components/TodoTask";

interface Task {
    id: number;
    description: string;
    status: boolean;
}

const tasks: Task[] = [
    { id: 1, description: "First Task", status: true },
    { id: 2, description: "Second Task", status: false },
    { id: 3, description: "Third Task", status: false },
    { id: 4, description: "Four Task", status: true },
];

const App: React.FC = () => {
    return (
        <main className="App">
            <h1>Todo App</h1>
            <TodoInput />
            <TodoContainer>
                {tasks.map((task) => (
                    <TodoTask
                        key={task.id}
                        content={task.description}
                        status={task.status}
                    />
                ))}
            </TodoContainer>
        </main>
    );
};

export default App;
