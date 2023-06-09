import React from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "山田颯太",
    "山田竜太郎"
  ]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>山田颯太</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>山田竜太郎</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>山田淳子</li>
            <button>戻す</button>
          </div>
          <div className="list-row">
            <li>山田瑠夏</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
