import React from "react";

interface Props {
    content: string;
}
const TodoTask: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            <li className="todo-task">
                <span className="icon-done">done</span>
                <span className="todo-task__content">{props.content}</span>
                <span className="icon-delete">Remove</span>
            </li>
        </React.Fragment>
    );
};

export { TodoTask };
