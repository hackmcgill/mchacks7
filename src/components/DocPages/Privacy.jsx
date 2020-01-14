import React from "react"

import Container from "./Container"
import Text from "./Text"
import Content from "../About/Content"

const Privacy = () => (
  <Container>
    <Content>
      <Text>
        <h1>Privacy Policy</h1>
        <h2>Introduction</h2>
        <p>
          HackMcGill, and by extension, McHacks, cares deeply about our users'
          privacy and personal data. In order to run the world class events that
          we do, we sometimes require personal data from our Hackers, Sponsors,
          Volunteers and other participants. We will always do our best to
          explain the use of this data in plain English and treat your data with
          the utmost respect in order to protect its privacy.
          <br></br>
          <br></br>
          In order to effectively run a hackathon, we collect certain data from
          users both on our website passively in the form of anonymous usage
          analytics as well as application data our hackers provide for us.
        </p>
        <h2>Analytics Data</h2>
        <p>
          We collect analytics data on all of our web properties including but
          not limited to mchacks.ca, hackmcgill.com, our Facebook, Twitter, and
          Instagram pages. This data is anonymous, aggregated, and may be shared
          publicly or privately with third parties in broad categories such as
          the number of visitors our properties receive per month or the general
          demographics of our traffic.
        </p>
        <h2>Application and Event Data</h2>
        <p>
          In order to participate at McHacks, we need to collect a minimum of
          information in order to properly run the event. Information will only
          be used within the services that McHacks utilizes for the Application
          Dashboard. Such services might include but are not limited to
          instances of a MongoDB server, Netlify, Google Cloud Platform, and
          Heroku.
          <br></br>
          <br></br>
          Some of this information may be shared with sponsors with your
          explicit permission for recruiting purposes. For example, if
          permitted, we might share a participants Resume or CV with specific
          sponsors. Information on the application such as race, gender, age,
          and the like will never be shared with sponsors and are used purely
          for anonymous demographic reports.
        </p>
        <h2>Emails and Other Messages</h2>
        <p>
          Information sent in Emails, Facebook Messages, Twitter and Instagram
          DM's and the like will be kept private to the McHacks organizing team
          unless explicit permission is granted.
        </p>
        <h2>How we keep your data safe</h2>
        <p>
          McHacks makes use of industry standard security and encryption
          techniques to gather and safeguard your data. Our infrastructure is
          hosted primarily in Google's data centers which use rigorous and
          industry standard physical security protocols to prevent physical
          attacks. Data access is strictly monitored internally with zero
          tolerance for unauthorized use. Access to application data is limited
          to the minimum number of organizers necessary while volunteers and
          other parties have limited access in order to facilitate basic
          operations such as check-in and registration on the day of.
        </p>
        <h2>Deletion Policy</h2>
        <p>
          Upon receipt of a written request with proof of identity via email
          sent to&nbsp;
          <a href="mailto:contact@mchacks.ca" target="_top">
            contact@mchacks.ca
          </a>
          , we will delete all associated personal data within 30 days. Please
          note that your data may remain in our rolling backups after this time
          but will not be utilized and will be deleted from any restored
          versions if necessary.
        </p>
        <h2>Questions</h2>
        <p>
          Any questions regarding the McHacks privacy policy may be directed to
          the&nbsp;
          <a href="mailto:contact@mchacks.ca" target="_top">
            contact@mchacks.ca
          </a>
          . We take your privacy seriously and value any feedback or criticism
          to ensure that you are comfortable with how we operate.
          <br></br>
          <br></br>
          <i>Last modified on January 13, 2020.</i>
        </p>
      </Text>
    </Content>
  </Container>
)

export default Privacy
