import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
.social, .contactInfo{
    background-color: #F7F7F7;
    color: #222222;
    padding: 1rem 1rem 0;
    text-align: center;
  }

  .social h3{
    border-bottom: 1px solid #b6e8ff;
    font-weight: 400;
    padding-bottom: .25rem;
  }

  .socialIcons{
    font-size: 200%;
    padding: 1rem 0;
  }

  .socialIcons a{
    color: #223055;
    padding: 0 .5rem;
  }

  .socialIcons a:hover{
    color: #ffc107;
  }

  .contactInfo{
    padding-top: 0;
  }


  .contactInfo article{
    padding: 1rem 0;
    border-top: solid 1px #b6e8ff;
  }

  .contactInfo h4{
    font-weight: 400;
  }
  
  .contactInfo li{
    font-weight: 300;
    list-style-type: none;
  }

  .copy{
    font-size: 70%;
    font-weight: 300;
    padding-top: 1rem;
  }
  
`;

export default function Footer() {
  return (
    <div>
    <FooterStyles>
      <section className='social' id='contact'>
          <article>
              <h3>Let's be socical connect with us</h3>
              <div className='socialIcons'>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                  <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              </div>
          </article>
      </section>

      <section className="contactInfo">
          <article>
              <h4>Contatct Information</h4>
              <ul>
                  <li>Phone : 123-456-7890</li>
                  <li>Email : eshopay@code.id</li>
                  <li>Address : Sentul City</li>
              </ul>
              <p class="copy">Codeid Academy &copy;2021</p>
          </article>
      </section>
    </FooterStyles>
  </div>
  )
}