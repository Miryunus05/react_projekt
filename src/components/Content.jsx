import img from '../assets/cardImg1.png';
import img2 from '../assets/cardImg2.png';
import img3 from '../assets/cardImg3.png';
import home from '../assets/home.png';
import card from '../assets/img1.png';
import card2 from '../assets/img2.png';
import card3 from '../assets/img3.png';

export const Content = () =>{
    return(
        <div className="content">
            <div className="cards">
                <div className="cardEl"><p>Services</p><h3>Building Dreams, Crafting Realities</h3></div>
                <div className='box'>
                    <div className='card'>
                        <img src={img} alt="" />
                        <h4>Consultation Services</h4>
                        <span className='cardSpan'>
                            <li>Design & Build</li>
                            <li>Cost analysis</li>
                            <li>Permits & Processes</li>
                            <li>Scheduling</li>
                            <li>Phasing</li>
                            <li>Resource management</li>
                        </span>
                        </div>
                        <div className='card'>
                        <img src={img2} alt="" />
                        <h4>General Construction</h4>
                        <span className='cardSpan'>
                            <li>Design & Build</li>
                            <li>Cost analysis</li>
                            <li>Permits & Processes</li>
                            <li>Scheduling</li>
                            <li>Phasing</li>
                            <li>Resource management</li>
                        </span>
                        </div>
                        <div className='card'>
                        <img src={img3} alt="" />
                        <h4>Maintenance Services</h4>
                        <span className='cardSpan'>
                            <li>Design & Build</li>
                            <li>Cost analysis</li>
                            <li>Permits & Processes</li>
                            <li>Scheduling</li>
                            <li>Phasing</li>
                            <li>Resource management</li>
                        </span>
                        </div>
                </div>
            </div>
        <div className='about'>
            <div className='aboutChild'>
                <img src={home} alt="" />
                <div className='aboutChildEl'>
                    <p className='aboutText'>About us</p>
                    <h2>Efficiency, Building, Budget & Time</h2>
                    <p className='aboutTextEl'>Hideva Group is a team of skilled construction professionals with a passion for building and a commitment to excellence. We provide a range of services, from small-scale renovations to large-scale commercial construction. We believe in transparency and communication, and we work closely with our clients to ensure their needs are met. Thank you for considering us for your construction needs.</p>
                </div>
            </div>
        </div>

        <div className='wrapper'>
            <div className='title'><p>Blog</p><h2>Insightful blogs about the construction industry.</h2></div>
            <div className='wrapperChild'>
                    <div className='wrapperCard'>
                        <img src={card} alt="" />
                        <p className='desc'>24 October 2022</p>
                        <h5>What are the processes involved in putting up a building?</h5>
                        <p className='desc2'>The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...</p>
                        <a href="#" className='link'>Read more</a>
                    </div>
                    <div className='wrapperCard'>
                        <img src={card2} alt="" />
                        <p className='desc'>3 November 2022</p>
                        <h5>What is Minimalist Architecture and Minimal Design Space?</h5>
                        <p className='desc2'>Minimalism in architecture is a form that can be characterized using various aspects with the sole aim of reducing clutter and...</p>
                        <a href="#" className='link'>Read more</a>
                    </div>
                    <div className='wrapperCard'>
                        <img src={card3} alt="" />
                        <p className='desc'>5 January 2023</p>
                        <h5>Integrating Technology for Modern Construction</h5>
                        <p className='desc2'>In the realm of modern construction, the integration of smart home innovations has emerged as a transformative force...</p>
                        <a href="#" className='link'>Read more</a>
                    </div>
            </div>
        </div>

        <div className='main'>
            <div className='mainText'><p>Get in Touch</p><h2>Reach out to us and let's turn your construction dreams into reality</h2></div>
            <div className='mainChild'>
                <form action="">
                    <label htmlFor="Name">Name</label><br />
                    <input type="text" placeholder='John Doe' /><br />
                    <label htmlFor="Email">Email</label><br />
                    <input type="text" placeholder='johndoe@gmail.com'/><br />
                    <label htmlFor="Message">Message</label><br />
                    <textarea></textarea><br />
                    <a href="#" className='sendLink'>Send</a>
                </form>
            </div>
        </div>


        </div>
    )
}