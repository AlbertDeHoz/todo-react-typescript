import React from "react";
import "./styles/App.css";
// import { TodoInput } from "./components/TodoInput";
import { TodoContainer } from "./components/TodoContainer";
import { TodoTask } from "./components/TodoTask";
import { TodoSearch } from "./components/TodoSearch";
import { TodoProvider, TodoContext } from "./TodoContext";

// const tasks: Task[] = [
//     { id: 1, description: "First Task", status: true },
//     { id: 2, description: "Second Task", status: true },
//     { id: 3, description: "Third Task", status: false },
//     { id: 4, description: "Four Task", status: true },
// ];
//"[{\"id\":1,\"description\":\"First Task\",\"status\":true},{\"id\":2,\"description\":\"Second Task\",\"status\":true},{\"id\":3,\"description\":\"Third Task\",\"status\":false},{\"id\":4,\"description\":\"Four Task\",\"status\":true}]"

const App: React.FC = () => {
    return (
        <TodoProvider>
            <main className="App">
                <h1>Todo App</h1>
                {/* <p style={{ color: "white" }}>
                    {completedTodos} of {totalTodos} todos completed
                </p> */}
                {/* <TodoInput /> */}
                <TodoContext.Consumer>
                    { ({
                        loading,
                        totalTodos,            
                        completedTodos,            
                        searchTodo,
                        todoSearched,            
                        todosRendered,            
                        toggleTodoStatus,
                        removeTodo,
                    }) => (
                        <React.Fragment>
                            <TodoSearch handleSearch={searchTodo} search={todoSearched} />
                            <TodoContainer>
                                {loading && <p className="warning__loading">Hello</p>}
                                {todosRendered.map((todo) => (
                                    <TodoTask
                                        key={todo.id}
                                        id={todo.id}
                                        content={todo.description}
                                        status={todo.status}
                                        handleTodoStatus={(id: number) =>
                                            toggleTodoStatus(id)
                                        }
                                        handleTodoRemove={(id: number) => removeTodo(id)}
                                    />
                                ))}
                            </TodoContainer>
                        </React.Fragment>
                    )}
                </TodoContext.Consumer>
            </main>
        </TodoProvider>
    );
};

export default App;
