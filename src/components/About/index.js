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
                        <p>Hello! My name is Chris, or as some of my friends like to refer to me, "Topher." </p>
                        <br />
                        <p>I graduated from the University of Wisconsin - Madison in 2012, and shortly after got a job in
                        finance. While I've gotten pretty good at my job, it feels like there's something lacking. After
                        days, weeks, and months of self-reflection, I realized that Web Development/Software Engineering was
                    my new calling.</p>
                        <br />
                        <p>I've always been a creative person. Back in high school and college I used to shoot and produce short
                        videos. While I considered this as a career choice for a while, I ultimately decided that I should
                        keep it as a hobby. But a job in finance was not giving me that sense of creativity and
                        accomplishment that I was hoping for in a career. I soon realized that coding and software
                        development has a lot of the same qualities as video production. You first come up with the idea.
                        You then create a visual mock-up or storyboard of the idea. Then comes the editing/coding. Lastly
                    you get to finish and admire the work you produced. </p>
                        <br />
                        <p>I'm excited to show off my skills and creativity with this profile. Please enjoy!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;