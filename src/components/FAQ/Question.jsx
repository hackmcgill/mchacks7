import React, { useState } from "react"

import ArrowDown from "./arrow_down.svg"

const Question = ({ question, children }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={"QuestionBox " + (expanded ? "expanded" : "")}
      onClick={() => setExpanded(!expanded)}
      onKeyDown={() => setExpanded(!expanded)}
      role="button"
      tabIndex={0}
    >
      <div class="questionRow">
        <div className="question">{question}</div>
        <div className="spacer"></div>
        <div className="expandButton">
          <img src={ArrowDown} alt="down arrow button" />
        </div>
      </div>
      <div className="answer">{children}</div>
    </div>
  )
}

export default Question
