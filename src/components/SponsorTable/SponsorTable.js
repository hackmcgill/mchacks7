import React from "react"

import SponsorTierContainer from "./SponsorTierContainer"
import SponsorWrapper from "./SponsorWrapper"
import SponsorLink from "./SponsorLink"
import SponsorImg from "./SponsorImg"

const Sponsor = ({
  url,
  img,
  maxHeight = "none",
  maxWidth = "none",
  flexBasisPercent = "none",
  paddingPercent = 2,
}) => (
  <SponsorWrapper
    flexBasisPercent={flexBasisPercent}
    paddingPercent={paddingPercent}
  >
    <SponsorLink href={url} target="_blank">
      <SponsorImg src={img} maxHeight={maxHeight} maxWidth={maxWidth} />
    </SponsorLink>
  </SponsorWrapper>
)

export const TeraSponsor = ({ url, img }) => (
  <Sponsor
    url={url}
    img={img}
    maxHeight={"25vh"}
    maxWidth={"25vw"}
    flexBasisPercent={90}
  />
)

export const GigaSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"10vh"} flexBasisPercent={65} />
)

export const MegaSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"9vh"} flexBasisPercent={45} />
)

export const KiloSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"9vh"} flexBasisPercent={21} />
)

export const ByteSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"6vh"} flexBasisPercent={18} />
)

export const InKindSponsor = ({ url, img }) => (
  <Sponsor
    url={url}
    img={img}
    maxHeight={"4vh"}
    flexBasisPercent={7}
    paddingPercent={1.5}
  />
)

export const SponsorTier = ({ children }) => (
  <SponsorTierContainer>{children}</SponsorTierContainer>
)

export default SponsorTier
