import styled from "styled-components"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: calc(100vh - 80px); /* 80px to account for footer */
  min-height: -moz-calc(100vh - 80px);
  min-height: -webkit-calc(100vh - 80px);
  flex: 1 0 auto;
`

export default Wrapper
