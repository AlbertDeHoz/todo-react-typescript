import { useContext, useState } from "react";
import { TodoContext } from '../TodoContext';
import { Task } from "../interfaces";

interface ITodoInput {
    todo?: Task;
    onClose: () => void;
}

const TodoInput = ({ todo, onClose }: ITodoInput) => {
    const [newTask, setNewTask] = useState<string>(todo?.description ?? "");
    const { addTodo, editTodo } = useContext(TodoContext);
    const registerTask = (e: React.SyntheticEvent): void => {
        e.preventDefault();
        onClose();
        if (!newTask) return;
        if (!todo) {
            addTodo(newTask);
            return;
        }
        todo.description = newTask;
        editTodo(todo);
    };

    return (
        <section className="todo-input__modal">
            <form onSubmit={registerTask}>
                <label htmlFor="task-input" className="task-input text__subtitle">
                    {!todo ? "Type a new Task" : "Editing task"}
                </label>
                <input
                    type="text"
                    id="task-input"
                    placeholder="To wash the Beaver"
                    name="task-input"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button className="button__primary"> {!todo ? "Add" : "Edit"} </button>
            </form>
        </section>
    );
};

export { TodoInput };
