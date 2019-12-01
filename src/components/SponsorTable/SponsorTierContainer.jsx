import styled from "styled-components"
import * as styleVars from "../variable"

export const SponsorTierContainer = styled.div`
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 960px;
  margin: 0 auto;

  &::after {
    content: "''";
    display: table;
    clear: both;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 85%;
    padding: 0;
  }
`

export default SponsorTierContainer
