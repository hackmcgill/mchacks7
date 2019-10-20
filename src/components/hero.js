
import React from "react"

import * as Styles from "../styles/components/index.js"
import * as Mailchimp from "../styles/components/signUpForm"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/mailchimp.scss'

import HeroSecondBackground from "../images/hero/bg-1.svg"
import HeroImage from "../images/hero/foreground.svg"


const displayNone = {display: 'none'}; 
const divStyle = {
    position: 'absolute',
    left: '-5000px'
}
const Hero = () => (
  
    <Styles.Hero>
        <div class='hero__copy'>
            <h2 class="hero__subheading">Youpi doop firggin slogan:</h2> 
            <h1 class="hero__heading">McHacks</h1> 
            <p class="hero__subheading">Montreal, Canada - February 1-2, 2020</p>
            <p class="hero__email">Sign up for updates about McHacks. No spam, we promise.</p>
            
            <div id="mc_embed_signup">
                <form action="https://mchacks.us12.list-manage.com/subscribe/post?u=daca896c9229eac78a0cc3810&amp;id=a5a34f6561"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <div class="mc-field-group">

                            <div class="mc-input-wrapper">
                                <input id="mce-EMAIL" type="email" value="" name="EMAIL" class="required email"
                                placeholder="your email here" />
                                <Mailchimp.MceEmbeddedSubscribe>
                                    <Styles.ArrowButton>
                                        <FontAwesomeIcon icon={faArrowRight}/>
                                    </Styles.ArrowButton>
                                </Mailchimp.MceEmbeddedSubscribe>
                            </div>

                            <div class="response" id="mce-error-response" style= {displayNone}></div>
                            <div class="response" id="mce-success-response" style= {displayNone}></div>

                        </div>
                        <div style={divStyle} aria-hidden="true">
                                <input type="text" name="b_daca896c9229eac78a0cc3810_a5a34f6561" tabindex="-1" value=""/>
                        </div>
                    </div>
                </form>
            </div>
            <Styles.HeroForeground src={HeroSecondBackground}/>
            <Styles.HeroBuildings src={HeroImage}/>
        </div>
    </Styles.Hero>
    
  )
  
  export default Hero