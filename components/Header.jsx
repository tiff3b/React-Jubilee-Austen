import background from "../images/full-background.png"

export default function Header () {
    return (
    <header> 
        <div className="homepage-hero">
            style={{backgroundImage: `url(${background})`}}
        <div className="content-wrapper">
            <h1>Jubilee Austen</h1>
            <nav>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#skills">skills</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="projects/index.html">projects</a></li>
                </ul>
            </nav>
            <h2>Hi, I'm a developer that loves clean & elegant code.</h2>
        </div>
        </div>
    </header>
    )
}