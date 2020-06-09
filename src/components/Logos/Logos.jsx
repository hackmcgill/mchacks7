import React from "react"

import Container from "./Container"
import Content from "./Content"
import Image from "./Image"
import NavLink from "./NavLink"
import * as COLORS from "../variable"

// import ads from "../../assets/images/sponsor/Ads logo.png"
import aus from "../../assets/images/sponsor/aus.png"
import cisco from "../../assets/images/sponsor/cisco.svg"
import fdm from "../../assets/images/sponsor/FDM-Logo-BLACK.svg"
import google from "../../assets/images/sponsor/google.svg"
import gorilla from "../../assets/images/sponsor/GG_WT_Vert_RGB.svg"
import ibm from "../../assets/images/sponsor/ibm.svg"
import indico from "../../assets/images/sponsor/indico-logo-final-black.png"
import ivey from "../../assets/images/sponsor/ivey.svg"
import jetBrains from "../../assets/images/sponsor/jetbrains-variant-3.png"
import manulife from "../../assets/images/sponsor/manulife.svg"
import microsoft from "../../assets/images/sponsor/microsoft.svg"
import netlify from "../../assets/images/sponsor/full-logo-light.png"
import novartis from "../../assets/images/sponsor/novartis_logo_pos_rgb.png"
import nuance from "../../assets/images/sponsor/nuance.png"
import rbc from "../../assets/images/sponsor/rbc.svg"
import stickerMule from "../../assets/images/sponsor/stickermule.png"
import tandemLaunch from "../../assets/images/sponsor/TandemLaunch_Logo_high_resolution.png"
import twilio from "../../assets/images/sponsor/twilio.png"
import vercel from "../../assets/images/sponsor/vercel.svg"
import voiceflow from "../../assets/images/sponsor/logo_black.png"
import wolfram from "../../assets/images/sponsor/wolfram.png"

const Logos = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content
      style={{
        fontSize: "5rem",
        justifyContent: "center",
        color: COLORS.colorHackRed,
      }}
    >
      Our sponsors
    </Content>
    {/* Tier 1/Mega sponsors */}
    <Content style={{ textAlign: "center" }}>
      <NavLink
        href="https://www.novartis.ca/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={novartis} style={{ width: "70%" }} />
      </NavLink>
    </Content>
    {/* <Content style={{ textAlign: "center", justifyContent: "space-around" }}>
      <NavLink href="https://adgear.com/en/" target="_blank">
        <Image src={ads} style={{ minWidth: "80%" }} />
      </NavLink>
    </Content> */}
    {/* Tier2/kilo sponsors */}
    <Content style={{ justifyContent: "space-evenly", justifyItems: "center" }}>
      <NavLink
        href="https://jobs.rbc.com/ca/en/featuredopportunities/student-early-talent-jobs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={rbc} style={{ minWidth: "100%" }} />
      </NavLink>
      <NavLink
        href="https://www.ivey.uwo.ca/msc/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={ivey} style={{ minWidth: "100%" }} />
      </NavLink>
    </Content>
    <Content style={{ justifyContent: "space-evenly", textAlign: "center" }}>
      <NavLink
        href="https://www.nuance.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={nuance} style={{ width: "50%" }} />
      </NavLink>
      <NavLink
        href="https://www.cisco.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={cisco} style={{ width: "50%" }} />
      </NavLink>
    </Content>
    <Content
      style={{
        justifyContent: "space-evenly",
        textAlign: "center",
        justifyItems: "center",
      }}
    >
      <NavLink
        href="https://www.gorillagroup.com/careers/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={gorilla} style={{ width: "100%", maxWidth: "250px" }} />
      </NavLink>
      <NavLink
        href="http://ausmcgill.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={aus}
          style={{ width: "100%", maxWidth: "250px", height: "50px" }}
        />
      </NavLink>
    </Content>
    <Content style={{ justifyContent: "space-evenly" }}>
      <NavLink
        href="https://careers.microsoft.com/us/en/students-and-graduates/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={microsoft} style={{ width: "100%", maxWidth: "250px" }} />
      </NavLink>
      <NavLink
        href="https://careers.google.com/students/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={google} style={{ width: "100%", maxWidth: "250px" }} />
      </NavLink>
    </Content>
    <Content style={{ justifyContent: "space-evenly" }}>
      <NavLink
        href="https://www-03.ibm.com/employment/ca/en/entry_level_campus.html/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={ibm}
          style={{ width: "100%", maxWidth: "250px", height: "50px" }}
        />
      </NavLink>
      <NavLink
        href="https://www.fdmgroup.com/en-ca/ca-graduates/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={fdm}
          style={{ width: "100%", maxWidth: "250px", height: "50px" }}
        />
      </NavLink>
    </Content>
    {/* Tier 3/Byte sponsors */}
    <Content style={{ justifyContent: "space-evenly", alignItems: "center" }}>
      <NavLink
        href="https://www.tandemlaunch.com/en/startup-program/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={tandemLaunch}
          style={{ width: "100%", maxWidth: "100px", transform: "scale(1.7)" }}
        />
        {/* need an image link for this company */}
      </NavLink>
      <NavLink
        href="https://www.manulife.ca/personal.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={manulife}
          style={{ width: "100%", maxWidth: "100px", transform: "scale(1.7)" }}
        />
      </NavLink>
      <NavLink
        href="http://hackp.ac/mlh-stickermule-hackathons/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={stickerMule} style={{ width: "100%", maxWidth: "150px" }} />
      </NavLink>
    </Content>
    {/* Tier 4/In-Kind sponsors */}
    <Content style={{ justifyContent: "space-evenly" }}>
      <NavLink
        href="https://www.wolframalpha.com/hackathons/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={wolfram} style={{ width: "100%", maxWidth: "45px" }} />
      </NavLink>
      <NavLink
        href="https://https://www.jetbrains.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={jetBrains} style={{ width: "100%", maxWidth: "50px" }} />
      </NavLink>
      <NavLink
        href="https://www.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={netlify} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://www.voiceflow.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={voiceflow} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://www.twilio.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={twilio} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://indico.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={indico} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
      <NavLink
        href="https://www.vercel.com/?utm_source=mchacks7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={vercel} style={{ width: "100%", maxWidth: "75px" }} />
      </NavLink>
    </Content>
  </Container>
)

export default Logos
