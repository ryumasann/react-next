export function TodoList() {
  const todos = [
    { text: "Reactのドキュメントを読む", completed: false  },
    { text: "Reactの練習問題を解く", completed: true  },
    { text: "Reactコンポーネントの練習をする", completed: false  }, // 追加のTODOアイテム
  ];


  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {/* {todo.text} {todo.completed ? <span>✓</span> :<span></span>} */}
            {todo.text} {todo.completed && <span>✓</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}