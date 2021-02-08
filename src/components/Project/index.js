import React from 'react';

function Project() {

    const projects = [
        {
            title: "12Wishes",
            projectLink: "https://twelve-wishes.herokuapp.com/",
            githubLink: "https://github.com/chriswein12/wish-list",
            imageFile: "12wishes.gif",
            group: true
        },
        {
            title: "CryptoCalc",
            projectLink: "https://chriswein12.github.io/crypto-calc/",
            githubLink: "https://github.com/chriswein12/crypto-calc",
            imageFile: "cryptocalc.gif",
            group: true
        },
        {
            title: "Weather Dashboard",
            projectLink: "https://chriswein12.github.io/weather-dashboard/",
            githubLink: "https://github.com/chriswein12/weather-dashboard",
            imageFile: "weather-dashboard.png",
            group: false
        },
        {
            title: "Note Taker",
            projectLink: "https://warm-coast-31838.herokuapp.com/",
            githubLink: "https://github.com/chriswein12/note-taker",
            imageFile: "note-taker.png",
            group: false
        },
        {
            title: "Password Generator",
            projectLink: "https://chriswein12.github.io/password-generator/",
            githubLink: "https://github.com/chriswein12/password-generator",
            imageFile: "password-generator.png",
            group: false
        },
        {
            title: "HTML-CSS Profile",
            projectLink: "https://chriswein12.github.io/Profile/",
            githubLink: "https://github.com/chriswein12/Profile",
            imageFile: "profile.png",
            group: false
        }
    ]

    const groupProjects = projects.filter((project) => project.group === true);
    const individualProjects = projects.filter((project) => project.group === false);

    return (
        <div>
            <h3>Group Projects</h3>
            {groupProjects.map((project) => (
                <div key={(project.title).split(" ").join("-").toLowerCase()}>
                    <a href={project.projectLink}>
                        <h4>{project.title}</h4>
                        <img
                            src={require(`../../assets/projects/${project.imageFile}`).default}
                            alt={project.title}
                        />
                    </a>
                    <h5>
                        <a href={project.githubLink}><i className="fab fa-github"></i> View Github Repo</a>
                    </h5>
                </div>
            ))}

            <h3>Individual Projects</h3>
            {individualProjects.map((project) => (
                <div key={(project.title).split(" ").join("-").toLowerCase()}>
                    <a href={project.projectLink}>
                        <h4>{project.title}</h4>
                        <img
                            src={require(`../../assets/projects/${project.imageFile}`).default}
                            alt={project.title}
                        />
                    </a>
                    <h5>
                        <a href={project.githubLink}><i className="fab fa-github"></i> View Github Repo</a>
                    </h5>
                </div>
            ))}
        </div>
    )
}

export default Project;