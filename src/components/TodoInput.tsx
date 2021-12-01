import { useState } from "react";

const TodoInput: React.FC = () => {
    const [newTask, setNewTask] = useState<string>("First");

    const registerTask = (e: React.SyntheticEvent): void => {
        console.log(newTask);
        e.preventDefault();
    };

    return (
        <section className="todo-input">
            <form onSubmit={registerTask}>
                <label htmlFor="task-input" className="task-input">
                    Type a new Task
                </label>
                <input
                    type="text"
                    id="task-input"
                    placeholder="To wash the Beaver"
                    name="task-input"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button>Add Task!</button>
            </form>
        </section>
    );
};

export { TodoInput };
