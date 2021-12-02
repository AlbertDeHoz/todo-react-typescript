import React from "react";

interface Props {
    content: string;
    status: boolean;
}
const TodoTask: React.FC<Props> = (props) => {
    return (
        <React.Fragment>
            <li className="todo-task">
                <span className={props.status?"fas fa-check-circle":"fas fa-circle-notch"}></span>
                <span className="todo-task__content">{props.content}</span>
                <span className="fas fa-times-circle"></span>
            </li>
        </React.Fragment>
    );
};

export { TodoTask };
