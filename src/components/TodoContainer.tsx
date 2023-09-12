// import { TodoSearch } from './TodoSearch'
interface Props {
    children:React.ReactNode;

}

const TodoContainer: React.FC<Props> = (props) => {
    return (
        <section className="todo-container">
            <h2 className="text_subtitle">List of Task</h2>
            <p>Hey! Take a look of your current tasks</p>
            <ul>{props.children}</ul>
        </section>
    );
};

export { TodoContainer };
