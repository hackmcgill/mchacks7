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
          margin-bottom: 8px;
        }
  
        .type {
          font-size: 0.85em;
          text-transform: uppercase;
        }
  
        .location {
          font-family: "Hind Siliguri", sans-serif;
        }
      }

      .icon {
        font-size: 2.4em;
        margin-right: 10px;
      }
    }

    &.type-workshop {
      .icon {
        color: ${styleVars.colorHackTeal};
      }

      .detail {
        border-color: ${styleVars.colorHackTeal};
      }
    }

    &.type-food {
      .icon {
        color: ${styleVars.colorHackYellow};
      }
      
      .detail {
        border-color: ${styleVars.colorHackYellow};
      }
    }

    &.type-activity {
      .icon {
        color: ${styleVars.colorHackRed};
      }

      .detail {
        border-color: ${styleVars.colorHackRed};
      }
    }

    &.type-main-event {
      background: ${styleVars.hackWhite};
      border-radius: 12px;
      border: 1px solid ${styleVars.hackBlack20};
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
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export default Container
