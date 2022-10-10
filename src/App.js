import React from "react"
import Joke from "./Joke"
import jokes from "./jokes"


function App() {
  return (
    <div className="jokes-container">{jokes.map((joke, index) => {
      return (
        <Joke
          setup={joke.Setup}
          punch={joke.Punchline}
          key={Math.random()}
          index={index}
        />
      )
    })
    }</div>
  )
}

export default App