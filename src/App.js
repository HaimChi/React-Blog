/*eslint-disable*/

import "./App.css";
import React, { useState } from "react";

function App() {
  const [heart, changeHeart] = useState(0);
  const [title, changeTitle] = useState([
    "Review the React",
    "Do assignments",
    "Watch the sessions",
  ]);

  const like = () => {
    changeHeart(heart + 1);
  };

  const titleChange = () => {
    const copy = [...title];
    copy[0] = "Study the React";
    copy[1] = "Refresh";
    copy[2] = "Take some walk";
    changeTitle(copy);
  };

  const sortChange = () => {
    const copy = [...title];
    copy.sort();
    changeTitle(copy);
  };

  return (
    <>
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <button onClick={titleChange}>Change</button>
        <button onClick={sortChange}>Sort</button>
        <h4>{title[0]}</h4>
        <span onClick={like}>❤️</span> {heart}
        <p>May, 15</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <span onClick={like}>❤️</span> {heart}
        <p>May, 15</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <span onClick={like}>❤️</span> {heart}
        <p>May, 15</p>
      </div>
    </>
  );
}

export default App;

// 하트를 누를때 마다 ->onclick
// 숫자 0에서 1씩 증가 -> 데이터 변화-> state 사용

//버튼을 누를때 마다 -> onClick
// 첫번째 항목의 내용이 바뀜 - >state
