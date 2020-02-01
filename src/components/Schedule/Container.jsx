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

    .time {
      background: #fff;
      text-align: left;
      padding-top: 10px;
      padding-bottom: 6px;
      padding-left: 32px;
      
      .to {
        font-size: 0.85em;
      }
    }

    .detail {
      flex: 1;
      padding: 16px 32px;
      border-radius: 0 12px 12px 0;
      box-sizing: border-box;
      text-align: left;
      display: flex;
      align-items: center;
      border-top: 2px solid ${styleVars.hackBlack10};
      border-bottom: 2px solid ${styleVars.hackBlack10};
      margin-bottom: 30px;

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

    &.type-activity {
      .icon {
        color: ${styleVars.colorHackTeal};
      }
    }

    &.type-main-event {
      .icon {
        color: ${styleVars.colorHackRed};
      }
    }

    &.type-food {
      .icon {
        color: ${styleVars.colorHackYellow};
      }
    }

    &.type-workshop {
      .icon {
        color: ${styleVars.hackBlack30};
      }
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export default Container
