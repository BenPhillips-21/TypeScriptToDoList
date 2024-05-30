import "./TodoList.css"

interface ToDoListProps {
    items: { id: string, text: string }[]
    handleDelete: (id: string) => void
}

export const ToDoList = (props: ToDoListProps) => {

    return (
        <>
        <ul>
            {
                props.items.map(item => (
                    <li key={item.id}>
                        <span>{item.text}</span>
                        <button onClick={props.handleDelete.bind(null, item.id)}>DELETE</button>
                        </li>
                ))
            }
        </ul>
        </>
    )
}