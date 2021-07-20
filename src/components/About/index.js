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
                        I've always been a creative person. I love coming up with an idea in my head, visualizing and then turning that idea into a fully-realized, final product.
                        In high school and college this came from producing videos and creating ad-campaigns. In my most recent position it was through projects 
                        I developed in my down time at work, finding ways to automate workflows and create new tools for our department to eliminate repetitive tasks and increase productivity.
                        </p>
                        <br />
                        <p>My experiences thus far have not only allowed me to utilize my creativity, but also build beneficial, life-long skills in communication, analysis, risk-management, and leadership.
                        However, over the past few years most of the creative and problem-solving work I did was only through side-projects, or when I had free time.
                        I decided that I wanted to find a way to incorporate this more into my daily work, and not just as an afterthought when I had a few free minutes.
                        After a bit self-reflection, and a lot of research, I became confident that web development/software engineering was the next best step for me to
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