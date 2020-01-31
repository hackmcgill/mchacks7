import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.div`
  max-width: 720px;
  text-align: center;
  margin: auto;
  margin-bottom: 100px;
  margin-top: 100px;

  &.hidden {
    display: none !important;
  }

  h2 {
    color: ${styleVars.colorHackRed};
    font-size: 3rem;
    font-weight: 400;
  }

  .QuestionBox {
    border: 1px solid ${styleVars.hackBlack10};
    padding: 24px 30px;
    border-radius: 10px;
    text-align: left;
    font-size: 1.2em;
    cursor: pointer;
    transition: background 0.5s ease;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    box-sizing: border-box;

    .questionRow {
      display: flex;

      .question {
        color: ${styleVars.hackBlack80};
        border-bottom: 3px solid ${styleVars.hackWhite};
        margin-bottom: -3px;
        transition: border 0.5s ease;
      }

      .spacer {
        flex: 1;
      }

      .expandButton > img {
        opacity: 30%;
        position: relative;
        top: 3px;
        transition: opacity 0.5s ease, transform 0.3s ease;
      }
    }

    .answer {
      color: ${styleVars.hackBlack60};
      margin-top: 10px;
      font-size: 0.9em;
      display: none;
      font-family: "Hind Siliguri", sans-serif;
    }

    &.expanded {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);

      .answer {
        display: block;
      }

      .expandButton > img {
        transform: rotate(-180deg);
      }

      .question {
        border-color: ${styleVars.hackWhite} !important;
      }
    }

    &:hover {
      .question {
        border-color: ${styleVars.colorHackYellow};
      }

      .expandButton > img {
        opacity: 90%;
      }
    }
  }
`

export default Container
