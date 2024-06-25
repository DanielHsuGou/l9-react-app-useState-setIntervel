import { useState, useEffect } from "react"; // hook function fm node module (to store, can be any data type)
// useEffect => return value on the cycle 平行時空 instead of delayed cycle
import logo from "./logo.svg";
import "./App.css";
// import "./ScoreBoard.js"
import ScoreBoard from "./ScoreBoard.js";

function App() {
  // player choice
  // PC choice

  const [player, setPlayer] = useState(""); // reset to initial state
  const [pc, setPC] = useState("");
  const [result, setResult] = useState({
    player: 0,
    pc: 0,
    draw: 0,
  })
  console.log(result)

  useEffect(() => {
    // side effect => parallel execution regardless of lifecycle
    // execute on certain condition (2nd arguments of useEffect)
    checkWinner()
  }, [player, pc])
  // *** trigger checkWinner when player&pc changed
  // 1. when clicked, player,pc changed => re-render
  // 2. player,pc changed => trigger checkWinner
  // 3. state inside checkWinner executed => re-render

  // const [timer, setTimer] = useState(5)

  // setInterval(() => {

  //   if (timer === 0) {
  //     setTimer(5)
  //   } else {
  //     setTimer (timer - 1)
  //   }
  // }, 1000)

  // if (player !== "scissor") {
  //   setPlayer("scissor"); // player => scissor (can't use browser to edit for the useState function, better security)
  //   // console.log(pc);
  // }
  // console.log("Player: ", player);
  // // ***** userState 1. set 2. execute => render below which loop the all function => infinite

  function buttonOnClick(value) {
    setPlayer(value);
    let PC = Math.floor(Math.random() * 3);
    let PCdice = "";
    PC === 1
      ? (PCdice = "scissor")
      : PC === 2
      ? (PCdice = "stone")
      : (PCdice = "paper");
    setPC(PCdice);
  }
  
  function checkWinner() {
    if (player && pc) {
      if (player === pc) {
        setResult(prevState => {
          return {...prevState, draw: prevState.draw + 1}
        })  // prevState = whatever var, make a copy of state and modify specified key
        return "引き分けだ！";
      } else if (
        (player === "paper" && pc === "scissor") ||
        (player === "stone" && pc === "paper") ||
        (player === "scissor" && pc === "stone")
      ) {
        setResult(prevState => {
          return {...prevState, pc: prevState.pc + 1}
        })
        return "お前の負けだ！";
      } else {
        setResult(prevState => {
          return {...prevState, player: prevState.player + 1}
        })
        return "勝ったぞ！";
      }
    } else {
      return ''
    }
  }
  
// let winnerMessage = checkWinner()
  return (
    <div className="App">
      <h1
        style={{
          fontSize: "48px",
          textAlign: "center",
        }}
      >
        じゃん・けん・ぽん
      </h1>
      {/* <h2>{timer}</h2> */}
      <div>
        <button onClick={() => buttonOnClick("paper")}>バー</button>
        <button onClick={() => buttonOnClick("scissor")}>チョキ</button>
        <button onClick={() => buttonOnClick("stone")}>グー</button>
      </div>
      <div style={{ fontSize: "36px" }}>
        {/* {player === "paper"
          ? "ぽん"
          : player === "stone"
          ? "けん"
          : player === "scissor"
          ? "じゃん"
          : ""} */}
        {/* if player === "" then "" */}
        プレイヤー
        {player === "paper" && "パー"}
        {player === "stone" && "グー"}
        {player === "scissor" && "チョキ"}
        を出した！
      </div>
      <div style={{ fontSize: "36px" }}>
        パソコン
        {pc === "paper" && "パー"}
        {pc === "stone" && "グー"}
        {pc === "scissor" && "チョキ"}
        を出した！
      </div>
      <br></br>
      <div style={{ textAlign: "center" }}>
        {player && pc && player === pc
          ? "引き分けだ！"
          : (player === "paper" && pc === "scissor") ||
            (player === "stone" && pc === "paper") ||
            (player === "scissor" && pc === "stone")
          ? "お前の負けだ！"
          : "よし！勝ったぞ！"}
        {/* {winnerMessage} */}
      </div>
      <br></br>
      {/* <div>
        勝った回数：
        {result.player}
        {`(${
          (result.player / (result.player + result.draw + result.pc)) * 100
        }%)`}
        <br></br>
        負けた回数：
        {result.pc}
        {`(${
          (result.player / (result.player + result.draw + result.pc)) * 100
        }%)`}
        <br></br>
        引き分け回数：
        {result.draw}
        {`(${
          (result.player / (result.player + result.draw + result.pc)) * 100
        }%)`}
      </div> */}
      <ScoreBoard scores={result} />
    </div>
  );
}

export default App;
