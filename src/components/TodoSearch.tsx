interface Props {
    search:string,
    // handleSearch:any | void;
    handleSearch?: React.FormEventHandler<HTMLInputElement>;
}

const TodoSearch: React.FC<Props> = (props) => {
    // const [search, setSearch] = useState<string>("");
    return (
        <section className="todo-search">
            <label htmlFor="search">Looking for your tasks!</label>
            <input
            className="todo-input"
                id="search"
                type="text"
                placeholder="Something about work, maybe?"
                value={props.search}
                onChange={props.handleSearch}
            />
        </section>
    );
};
export { TodoSearch };
