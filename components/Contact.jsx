import desk from '../images/desk-objects.png'
import envelope from '../images/envelope.png'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import github from '../images/github.png'

export default function Contact () {

    return (
            <footer>
        <section id="contact">
            <div class="content-wrapper">
                <div class="contact-image">
                    <img src={desk} alt="Keyboard glasses pen and paper image" id="contact-img"/>
                </div>
                <div class="contact-info">
                    <h2>Like What You See?</h2>
                    <h3 id="email-header">Let's meet for a cup of coffee.</h3>
                    <a href="mailto:hi@Jubilee Austen.com"><img src={envelope} alt="envelope icon" id="envelope-icon" /> hi@JubileeAusten.com</a>
                    <h3 id="socialmedia-header">Or, follow me on social media:</h3>
                    <ul>
                        <li><a href="https://x.com/" target="-blank"><img src={twitter} 
                                    alt="twitter icon"/></a></li>
                        <li><a href="https://www.facebook.com/" target="_blank"><img src={facebook}
                                    alt="facebook icon"/></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><img src={instagram}
                                    alt="instagram icon"/></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><img src={linkedin}
                                    alt="linkedin icon"/></a></li>
                        <li><a href="https://www.github.com/" target="_blank"><img src={github}
                                    alt="github icon"/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    </footer>
    )
}