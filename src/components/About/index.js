import React from 'react';
import photo from '../../assets/profile/profile-pic.jpg';

function About() {

    return (
        <section>
            <div>
                <h2 className="title-styling">About Me</h2>
            </div>
            <div className="about-container">
                <div className="about-me">
                    <div>
                        <img className="profile-pic" alt="profile pic" src={photo} />
                    </div>

                    <div className="about-me-text">
                        <h3>Hello! My name is Chris! </h3>
                        <br />
                        <p>As recent graduate of the University of Wisconsin Coding Bootcamp, I am excited to start my journey as a Full-Stack Web Developer!</p>
                        <br />
                        <p>
                            Coming originally from a background in strategic communication and finance through work and school, I've enjoyed the opportunities
                            and experiences I've had so far. They've allowed me to build beneficial, life-long skills in things like communication, analysis, risk-management,
                            and leadership... just to name a few.
                            However, I still felt like there were certain elements I wanted more of in my professional life - primarily creativity and problem-solving.
                        </p>
                        <br />
                        <p>                              
                        I've always been a creative person. I love coming up with an idea in my head, and then turning that idea into a fully-realized, final product.
                        In high school and college this came from working on and creating videos and ad-campaigns. In my most recent position this came from side-projects I developed in my down time, finding ways to
                        automate workflows and create new tools for our department to eliminate repetitive tasks and increase productivity. </p>
                        <br />
                        <p>I decided that I wanted to find a way to incorporate this more into my daily work, and not just on the side.
                        After a bit self-reflection, and a lot of research, I became confident that Web Development/Software Engineering was the next best step for me to
                        provide these elements I'd come to love. I enrolled in, and completed, the University of Wisconsin's Coding Bootcamp program, learning both front-end and back-end development.</p>
                        <br />                        
                        <p>I'm excited to combine my previous skills and experience with the new knowledge that I've gained in web development, and invite you to spend some time viewing the projects I've created in this porfolio. Please enjoy!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;