import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.footer`
  padding: 2rem 0;
  border-top: 2px solid ${styleVars.colorHackRed};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  height: 80px;
  margin-top: 0;
`

export default Container
