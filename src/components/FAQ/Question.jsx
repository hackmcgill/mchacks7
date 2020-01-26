import React, { useState } from "react"

import ArrowDown from "./arrow_down.svg"

const Question = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={"QuestionBox " + (expanded ? "expanded" : "")}
      onClick={() => setExpanded(!expanded)}
    >
      <div class="questionRow">
        <div className="question">{question}</div>
        <div className="spacer"></div>
        <div className="expandButton">
          <img src={ArrowDown} />
        </div>
      </div>
      <div className="answer">{answer}</div>
    </div>
  )
}

export default Question