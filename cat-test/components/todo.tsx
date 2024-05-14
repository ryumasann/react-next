export function TodoList() {
  const todos = [
    { text: "Reactのドキュメントを読む" },
    { text: "Reactの練習問題を解く" },
    { text: "Reactコンポーネントの練習をする" }, // 追加のTODOアイテム
  ];


  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}