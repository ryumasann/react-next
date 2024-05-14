// function Avatar({ person, size }) {
//   // ...
// }
// この構文は “分割代入 (destructuring)” と呼ばれるもので、関数の引数からプロパティを読み出す以下のようなコードと同等です。

// function Avatar(props) {
//   let person = props.person;
//   let size = props.size;
//   // ...
// }

export function Cat(width="50px", height="50px") {
  // export function Cat(props) {
  console.log(width)
  return (
    <div>
      <h1>Cute Cat</h1>
      <div>
      <img src="https://i.imgur.com/O3EIPHpb.jpg" alt="Cute Cat" width={width} height={height}  />
        {/* <img src="https://i.imgur.com/O3EIPHpb.jpg" alt="Cute Cat" width={props.width} height={props.height}  /> */}
      </div>
    </div>
  );
}
