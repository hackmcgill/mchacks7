import React from "react"

import Container from "./Container"
import Text from "./Text"
import Image from "./Image"
import Content from "../About/Content"

import Apparel from "../../assets/images/designs/apparel.svg"
import Schedule from "../../assets/images/designs/schedule.svg"

const SponsorInfo = () => (
  <Container>
    <Content>
      <Text>
        <h1>Sponsor Info</h1>
        <h2>Introduction</h2>
        <p>
          Hey there, sponsor! We’re looking forward to seeing you for round
          seven of McHacks, Canada’s original collegiate hackathon, on{" "}
          <b>February 1st</b>! Before you arrive, we’d like to offer you a
          pre-event outline of what to expect on the day-of.
          <br></br>
          <br></br>
          In this package, you can find information about check-in, sponsors'
          space, mentorship, event schedule, as well as some tips to make the
          most out of McHacks.
        </p>
        <h2>Check-In</h2>
        <p>
          Sponsor check-in will start at <b>7:30 a.m.</b> at the{" "}
          <a
            href="https://goo.gl/maps/sS2AttbgikQthNJ67"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lorne M. Trottier Building
          </a>{" "}
          (3630 University St, Montreal, QC H3A 0C6). McHacks organizers will be
          waiting in the lobby to greet you and take you to your table. There
          will be a secure coat and bag check staffed by volunteers if you need
          to drop off any of your belongings for the duration of the event.
          <br></br>
          <br></br>
          There will be a <b>run-through</b> of the opening ceremonies at{" "}
          <b>9:00-9:45 a.m.</b> in room 522 in the{" "}
          <a
            href="https://goo.gl/maps/JxjTCshjo1Sg8KNZ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            McIntyre Medical Building
          </a>{" "}
          (3655 Promenade Sir-William-Osler, Montreal, QC H3G 1Y6) to ensure
          everyone is familiar with the schedule. McHacks volunteers are
          available to direct you from the Trottier Building to the McIntyre
          Medical Building. If part of your package involves speaking at the
          opening ceremonies and you have any slides that you want to display,
          they must be uploaded to the{" "}
          <a
            href="https://forms.gle/q8W28FcfhxqSrkDm7"
            target="_blank"
            rel="noopener noreferrer"
          >
            slide upload form
          </a>{" "}
          before Mon, January 27.
        </p>
        <h2>Sponsors</h2>
        <p>
          This year, our sponsors will be positioned on the second level
          Mezzanine of the Trottier building. This is where you can interact
          with hackers, showcase your products, and distribute swag. Make sure
          you have access to social media so that you can share your weekend
          with our audience and yours!
          <br></br>
          <br></br>
          <b>Sponsors who have a table:</b> It is highly encouraged to have one
          person stationed at your table at all times and to bring a banner
          (along with something to display the banner on) and a table cloth to
          make the space your own.
          <br></br>
          <br></br>
          The event will run from Saturday at 9:00 a.m. to Sunday at 5:00 p.m.
          We’ve found that hackers are most eager to chat up sponsors on
          Saturday between noon and 6:00 p.m., so try to have as many company
          representatives as possible present during these hours. You’re welcome
          to walk around the hackers’ workstations, but it’s nice to have a
          friendly face stationed at your table whenever possible. We will
          provide free-flowing coffee, tea, and other beverages all day and
          night, energy drinks, as well as snacks to keep the hacking energy
          going.
          <br></br>
          <br></br>
          We ask that each individual representative fill out the{" "}
          <a
            href="https://forms.gle/eiYLWVqcrGFRWnky5"
            target="_blank"
            rel="noopener noreferrer"
          >
            sponsor information form
          </a>{" "}
          to help us stay connected for the hackathon. To streamline
          communication, forms should be filled out before Friday, January 24.
          <br></br>
          <br></br>
          We also recommend bringing lots of swag because hackers LOVE swag.
          Some hacker favourites include pillows and blankets, phone chargers,
          socks, fidget spinners, stickers, and t-shirts.
        </p>
        <h2>Engineers and Designers</h2>
        <p>
          If you are sending engineers and designers, they will be{" "}
          <b>mentors</b>, and the entire venue is at their disposal. Mentors are
          free to roam around hacking spaces and interact with hackers as much
          as possible throughout the weekend. There will also be a mentor space
          where hackers can go themselves and find mentors.
          <br></br>
          <br></br>
          In the{" "}
          <a
            href="https://forms.gle/eiYLWVqcrGFRWnky5"
            target="_blank"
            rel="noopener noreferrer"
          >
            sponsor information form
          </a>
          , mentors will be able to submit a quick bio outlining their areas of
          expertise and general areas of interest. We will be integrating
          mentorship requests into our slack and this information will help us
          connect them to hackers who will benefit the most.
        </p>
        <h2>Judging</h2>
        <p>
          The judges will consist of McGill Computer Science professors,
          HackMcGill alumni, eligible sponsors and members of the local tech
          community. Judges will evaluate projects on various criteria
          (technical aspects, creativity, and marketability) to select the top 6
          teams. Then, teams will demo their hacks at closing ceremonies in
          front of the crowd to determine our champions.
          <br></br>
          <br></br>
          If you are offering a <b>custom prize</b>, you will have the
          opportunity to speak about it during opening ceremonies (if stage time
          is included in your package) and award the prize to the winning team
          at closing ceremonies. You will also be judging for the prize and are
          responsible for creating a judging criteria.
        </p>
        <h2>Workshops</h2>
        If you are hosting a workshop, they will be held starting Saturday
        afternoon as hacking begins. The workshop spaces will be managed on a
        first-come first-serve basis. If there is specific software hackers need
        to download, or any other tasks hackers should do before attending your
        workshop, let us know so that we can include that in your workshop
        description. Your laptop will need an HDMI or VGA out to work with the
        projector. We encourage bringing mentors to help during and after the
        workshop so hackers can explore their new skills with friendly faces
        around to assist them.
        <h2>Schedule</h2>
        <Image src={Schedule} />
        <p>
          <i>
            Please note the above schedule is tentative and subject to change.
          </i>
        </p>
        <h2>Shirt and Apparel Colours</h2>
        <br></br>
        <Image src={Apparel} />
        <br></br>
        <h2>Communication</h2>
        <p>
          For the weekend of McHacks, we will be using Slack as the primary
          means of communication between hackers, organizers, volunteers, and of
          course, sponsors! Once each of your representatives has filled out the{" "}
          <a
            href="https://forms.gle/eiYLWVqcrGFRWnky5"
            target="_blank"
            rel="noopener noreferrer"
          >
            sponsor information form
          </a>
          , they will be invited to join.
          <br></br>
          <br></br>
          In the event of an emergency, <b>contact</b> the co-directors Isabelle
          (+1-940-594-5583) or Max (+1-438-885-7116) for assistance. Please also
          search for a nearby organizer for immediate assistance.
        </p>
      </Text>
    </Content>
  </Container>
)

export default SponsorInfo
