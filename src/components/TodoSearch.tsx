const TodoSearch: React.FC = () => {
    return <section className="todo-search">
        <h2>Search</h2>
        <label htmlFor="search">Looking for your tasks!</label>
        <input id="search" type="text" placeholder="Something about work, maybe?"/>
        <button>Search</button>
    </section>
}
export { TodoSearch }