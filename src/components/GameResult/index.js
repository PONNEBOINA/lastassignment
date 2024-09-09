const GameResult = props => {
  const {choicesList, text, isShow, newArray, checkResult, restartGame} = props
  const showGame = () => (
    <div>
      {isShow && (
        <>
          <button
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <img
              src={choicesList[0].id}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </button>
          <button
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <img
              src={choicesList[1].id}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </button>
          <button
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <img
              src={choicesList[2].id}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </button>
        </>
      )}
      {!isShow && (
        <>
          <div>
            <p>YOU</p>
            <img src={newArray[0].imageUrl} alt="your choice" />
          </div>
          <div>
            <p>OPPONENT</p>
            <img src={newArray[1].imageUrl} alt="opponent choice" />
          </div>
          <div>
            <p>{text}</p>
            <button type="button" onClick={restartGame}>
              PLAY AGAIN
            </button>
          </div>
        </>
      )}
    </div>
  )
  return showGame()
}
export default GameResult
