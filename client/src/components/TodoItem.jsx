export function TodoItem({title, completed}) {
  return (
    <>
      <li className={completed ? "strike-through" : undefined}>{title} {completed}</li>
    </>
  )
}
