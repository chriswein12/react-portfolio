import React from 'react';
import Navigation from "../Navigation";

function Header(props) {

    return (
        <header>
            <h1>
                <a href="index.html">Chris Wein</a>
            </h1>
            <Navigation
                sections={props.sections}
                setCurrentSection={props.setCurrentSection}
                currentSection={props.currentSection}
            ></Navigation>
        </header>

    )

}

export default Header;