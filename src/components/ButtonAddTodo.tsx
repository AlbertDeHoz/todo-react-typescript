interface IButtonAddTodo {
    handleClick: (e:any) => void;
}

const ButtonAddTodo = ({ handleClick }: IButtonAddTodo) => {
    return <button className="button-add-todo" onClick={handleClick}>+</button>
}

export { ButtonAddTodo };
