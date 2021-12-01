import { TodoSearch } from './TodoSearch'
interface Props {
  children: React.ReactElement[]
}

const TodoContainer:React.FC <Props> = (props) => {
  return <section className="todo-container">
    <TodoSearch/>
    <h2>List of Task</h2>
    <p>Hey! You can manage your tasks the way you want...</p>
    <ul>
      {props.children}
    </ul>
  </section>
}

export { TodoContainer }