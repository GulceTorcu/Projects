import { useState } from 'react'

export default function TodoItem({ todo, onEditClick, onDeleteClick }) {

    const [checked, setChecked] = useState(false);

    return (
        <li>
            <input type='checkbox' checked={checked} onChange={e => setChecked(e.target.checked)} />
            <span style={{ textDecoration: checked ? 'line-through' : '' }}>
                {todo.text}
            </span>
            <button onClick={() => onEditClick(todo)}>Edit</button>
            <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
        </li>
    );
}