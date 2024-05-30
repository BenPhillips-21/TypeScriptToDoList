

export const ToDoList = () => {

    return (
        <>
        <ul>
            {
                todos.map(todo => (
                    <li key={todo.id}>{todo.text}</li>
                ))
            }
        </ul>
        </>
    )
}