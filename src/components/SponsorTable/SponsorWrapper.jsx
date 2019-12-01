import styled from "styled-components"

export const SponsorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  flex-direction: row;
  flex-basis: ${({ flexBasisPercent }) => flexBasisPercent}%;
  padding: ${({ paddingPercent }) => paddingPercent}%;
`

export default SponsorWrapper
