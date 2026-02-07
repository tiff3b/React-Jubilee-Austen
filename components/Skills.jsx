import htmlIcon from '../images/html-icon.png'
import pencil from '../images/pencil-icon.png'
import git from '../images/git-icon.png'

export default function Skills (){
    return (
        <section id="skills">
            <h2>Developer Skills</h2>
            <div class="content-wrapper">
                
                <div class="skill-list">
                    <img src={htmlIcon} alt="HTML"/>
                    <h3>HTML & CSS</h3>
                    <p>I pride myself on my organized and well-formatted HTML and CSS. All my code is tested to ensure
                        it's valid, accessible for all users, and works great on the major browsers.</p>
                </div>
                <div class="skill-list">
                    <img src={pencil} alt="Pencil"/>
                    <h3>Design to Code</h3>
                    <p>If you have a design, I can turn it into a website! I'll use the exact colors, fonts, and imagery
                        you need. You provide the design comp, and I'll code up a site just for you.</p>
                </div>
                <div class="skill-list">
                    <img src={git} alt="Git"/>
                    <h3>Git & GitHub</h3>
                    <p>I never work on a project without my best friends Git and GitHub! I can collaborate with your
                        team on any codebase and adjust to your team's version control workflow.</p>
                </div>
            </div>
        </section>
)
}