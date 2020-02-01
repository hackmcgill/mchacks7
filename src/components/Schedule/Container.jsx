import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.section`
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

  .DayTabNav {
    display: flex;

    .DayTab {
      text-align: center;
      flex: 1;
      cursor: pointer;
      border-bottom 2px solid ${styleVars.hackBlack20};
      padding: 10px 0;
      font-size: 1.2em;
      color: ${styleVars.hackBlack60};
      font-weight: normal;

      &.active {
        color: ${styleVars.hackBlack80};
        border-color: ${styleVars.colorHackRed};
      }
    }
  }

  .Event {
    margin-top: 24px;
    display: flex;
    flex-direction: columns;

    .time {
      width: 120px;
      padding-top: 13px;
      padding-bottom: 13px;
      background: ${styleVars.hackBlack5};
      border-radius: 12px 0 0 12px;

      .to {
        font-size: 0.85em;
      }
    }

    .detail {
      flex: 1;
      padding: 16px 24px;
      border-radius: 0 12px 12px 0;
      box-sizing: border-box;
      text-align: left;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
      background: ${styleVars.hackWhite};
      border: 1px solid ${styleVars.hackBlack60};
      display: flex;
      align-items: center;

      .overview {
        flex: 1;

        .name {
          font-size: 1.5em;
          margin-top: -4px;

          small {
            font-size: 0.8em;
          }
        }
  
        .type {
          font-size: 0.85em;
          text-transform: uppercase;
        }
        
        .description {
          color: ${styleVars.hackBlack70};
          font-family: "Hind Siliguri", sans-serif;
          margin-top: 8px;
        }
  
        .location {
          margin-top: 8px;
          font-family: "Hind Siliguri", sans-serif;
        }
      }

      .icon {
        font-size: 2.4em;
        margin: 0 20px 0 40px;
      }

      .icon > *:before {
        background: linear-gradient(#f2463a, #f2463a55);
        background-clip: text;
        text-fill-color: transparent;

      }
    }

    &.type-workshop {
      background: ${styleVars.hackWhite};
      border-radius: 12px;
      border: 1px solid ${styleVars.hackBlack30};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

      .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .detail {
        border: none;
        background: none;
        box-shadow: none;
      }
      .icon {
        color: ${styleVars.hackBlack30};
      }

      .detail {
        border-color: ${styleVars.hackBlack30};
      }
    }

    &.type-food {
      background: ${styleVars.hackWhite};
      border-radius: 12px;
      border: 1px solid ${styleVars.colorHackYellow};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

      .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .detail {
        border: none;
        background: none;
        box-shadow: none;
      }
      .icon {
        color: ${styleVars.colorHackYellow};
      }
      
      .detail {
        border-color: ${styleVars.colorHackYellow};
      }
    }

    &.type-activity {
      background: ${styleVars.hackWhite};
      border-radius: 12px;
      border: 1px solid ${styleVars.colorHackTeal};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

      .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .detail {
        border: none;
        background: none;
        box-shadow: none;
      }
      .icon {
        color: ${styleVars.colorHackTeal};
      }

      .detail {
        border-color: ${styleVars.colorHackTeal};
      }
    }

    &.type-main-event {
      background: ${styleVars.hackWhite};
      border-radius: 12px;
      border: 1px solid ${styleVars.colorHackRed};
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

      .time {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .detail {
        border: none;
        background: none;
        box-shadow: none;
      }

      .icon {
        color: ${styleVars.colorHackRed};
      }
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export default Container
