import React from "react"

import SponsorTierContainer from "./SponsorTierContainer"
import SponsorWrapper from "./SponsorWrapper"
import SponsorLink from "./SponsorLink"
import SponsorImg from "./SponsorImg"
import Text from "./Text"

import TestImg from "../../assets/images/designs/buildings.svg"

const Sponsor = ({
  url,
  img,
  maxHeight = "none",
  flexBasisPercent = "none",
  paddingPercent = 2,
}) => (
  <SponsorWrapper
    flexBasisPercent={flexBasisPercent}
    paddingPercent={paddingPercent}
  >
    <SponsorLink href={url} target="_blank">
      <SponsorImg src={img} maxHeight={maxHeight} />
    </SponsorLink>
  </SponsorWrapper>
)

const TeraSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"25vh"} flexBasisPercent={90} />
)

const GigaSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"12vh"} flexBasisPercent={50} />
)

const MegaSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"10vh"} flexBasisPercent={30} />
)

const KiloSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"8vh"} flexBasisPercent={19} />
)

const ByteSponsor = ({ url, img }) => (
  <Sponsor url={url} img={img} maxHeight={"5vh"} flexBasisPercent={15} />
)

const InKindSponsor = ({ url, img }) => (
  <Sponsor
    url={url}
    img={img}
    maxHeight={"4vh"}
    flexBasisPercent={7}
    paddingPercent={1.5}
  />
)

export const SponsorTable = () => (
  <>
    <Text>Our Sponsors</Text>
    <SponsorTierContainer>
      <TeraSponsor img={TestImg} url="https://test.com" />
    </SponsorTierContainer>
    <SponsorTierContainer>
      <GigaSponsor img={TestImg} url="https://test.com" />
      <GigaSponsor img={TestImg} url="https://test.com" />
    </SponsorTierContainer>
    <SponsorTierContainer>
      <MegaSponsor img={TestImg} url="https://test.com" />
      <MegaSponsor img={TestImg} url="https://test.com" />
      <MegaSponsor img={TestImg} url="https://test.com" />
    </SponsorTierContainer>
    <SponsorTierContainer>
      <KiloSponsor img={TestImg} url="https://test.com" />
      <KiloSponsor img={TestImg} url="https://test.com" />
      <KiloSponsor img={TestImg} url="https://test.com" />
      <KiloSponsor img={TestImg} url="https://test.com" />
    </SponsorTierContainer>
    <SponsorTierContainer>
      <ByteSponsor img={TestImg} url="https://test.com" />
      <ByteSponsor img={TestImg} url="https://test.com" />
      <ByteSponsor img={TestImg} url="https://test.com" />
      <ByteSponsor img={TestImg} url="https://test.com" />
      <ByteSponsor img={TestImg} url="https://test.com" />
    </SponsorTierContainer>
    <SponsorTierContainer>
      <InKindSponsor img={TestImg} url="https://test.com" />
      <InKindSponsor img={TestImg} url="https://test.com" />
      <InKindSponsor img={TestImg} url="https://test.com" />
      <InKindSponsor img={TestImg} url="https://test.com" />
      <InKindSponsor img={TestImg} url="https://test.com" />
      <InKindSponsor img={TestImg} url="https://test.com" />
    </SponsorTierContainer>
  </>
)

export default SponsorTable
