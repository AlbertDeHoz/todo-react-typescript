import { useContext, useState } from "react";
import "./styles/App.css";
import { TodoInput } from "./components/TodoInput";
import { TodoContainer } from "./components/TodoContainer";
import { TodoTask } from "./components/TodoTask";
import { TodoSearch } from "./components/TodoSearch";
import { TodoContext } from "./TodoContext";
import { ButtonAddTodo } from "./components/ButtonAddTodo";
import { Task } from "./interfaces";

const App = () => {
    const [openTodoModal, setOpenTodoModal] = useState(false);
    const handleOpenAddTodo = () => setOpenTodoModal(true);
    const [currentTodo, setCurrentTodo] = useState<Task | undefined>();
    const { searchTodo, loading, todosRendered, todoSearched, toggleTodoStatus, removeTodo } = useContext(TodoContext);
    return (
        <>
            {openTodoModal && <TodoInput todo={currentTodo} onClose={() => setOpenTodoModal(false)} />}
            <main className="App">
                <h1>Todo App</h1>
                <TodoSearch handleSearch={searchTodo} search={todoSearched} />
                <TodoContainer>
                    {loading && <p className="warning__loading">loading...</p>}
                    {todosRendered.map((todo) => (
                        <TodoTask
                            key={todo.id}
                            id={todo.id}
                            content={todo.description}
                            status={todo.status}
                            handleTodoStatus={(id: number) =>
                                toggleTodoStatus(id)
                            }
                            handleEditTodo={() => {
                                setOpenTodoModal(true);
                                setCurrentTodo(todo);
                            }}
                            handleTodoRemove={(id: number) => removeTodo(id)}
                        />
                    ))}
                </TodoContainer>
            </main>
            <ButtonAddTodo handleClick={() => { setCurrentTodo(undefined); handleOpenAddTodo(); }} />
        </>
    );
};

export default App;
