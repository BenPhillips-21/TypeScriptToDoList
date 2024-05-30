interface ToDoListProps {
    items: { id: string, text: string }[]
}

export const ToDoList = (props: ToDoListProps) => {

    return (
        <>
        <ul>
            {
                props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))
            }
        </ul>
        </>
    )
}