import styled from "styled-components"

export const SponsorImg = styled.img`
  max-width: 100%;
  max-height: ${({ maxHeight }) => maxHeight};
  max-width: ${({ maxWidth }) => maxWidth};
  transition: 1s;
`

export default SponsorImg
