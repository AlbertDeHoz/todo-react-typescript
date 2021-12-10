import React from "react";

interface Props {
    id: number;
    content: string;
    status: boolean;
    handleTodoStatus: any;
    handleTodoRemove: any;
}
const TodoTask: React.FC<Props> = (props) => {
    const setFinishedColor = props.status?"is-finished":"";
    const setIconStatus = props.status?"fas fa-check-circle":"fas fa-circle-notch"
    return (
        <React.Fragment>
            <li className="todo-task">
                <span className={`todo-task__content ${setFinishedColor}`}>
                    <span
                        onClick={() => props.handleTodoStatus(props.id)}
                        className={setIconStatus}
                    ></span>
                    {props.content}
                </span>
                <span className="fas fa-times-circle" onClick={() => props.handleTodoRemove(props.id)}></span>
                <span className="todo-task__edit">edit</span>
            </li>
        </React.Fragment>
    );
};

export { TodoTask };
