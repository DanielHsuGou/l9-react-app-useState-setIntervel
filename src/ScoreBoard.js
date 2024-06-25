// function ScoreBoard(props) { // props
//     // props.scores
//     // props.z
//     // props.x
function ScoreBoard({scores, x}) { // props
    // const {score,x} = props (deconstructing) can set to above
   return (
    <div>
      勝った回数：
      {scores.player}
      {`(${
        (scores.player / (scores.player + scores.draw + scores.pc)) * 100
      }%)`}
      <br></br>
      負けた回数：
      {scores.pc}
      {`(${
        (scores.player / (scores.player + scores.draw + scores.pc)) * 100
      }%)`}
      <br></br>
      引き分け回数：
      {scores.draw}
      {`(${
        (scores.player / (scores.player + scores.draw + scores.pc)) * 100
      }%)`}
    </div>
   )
}

export default ScoreBoard