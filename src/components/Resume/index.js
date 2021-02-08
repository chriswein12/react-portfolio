import React from 'react';

function Resume() {
    return (
        <div>
            <h2 className="title-styling">Resume</h2>
            <div className="center">
                <div className="resume-container">
                    <h3>Click the button below to download a .pdf copy of my Resume</h3>
                    <div className="button-container">
                        <a href={require("../../assets/download/resume.pdf").default} download="resume">
                            <button type="button">Download Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;