interface Props {
    search:string,
    // handleSearch:any | void;
    handleSearch?: React.FormEventHandler<HTMLInputElement>;
}

const TodoSearch: React.FC<Props> = (props) => {
    // const [search, setSearch] = useState<string>("");
    return (
        <section className="todo-search">
            <h2>Search</h2>
            <label htmlFor="search">Looking for your tasks!</label>
            <input
                id="search"
                type="text"
                placeholder="Something about work, maybe?"
                value={props.search}
                onChange={props.handleSearch}
            />
            {/* <button>Search</button> */}
            <pre>{props.search}</pre>
        </section>
    );
};
export { TodoSearch };
