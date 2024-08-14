export function TodoListItem({ children, isCompleted = false}) {
  return (
    <label>
      <input type="checkbox" checked={isCompleted} />
      {children}
    </label>
  )
}
