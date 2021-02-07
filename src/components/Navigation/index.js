import React from 'react';

function Navigation({ sections, currentSection, setCurrentSection }) {

    return (
        <nav>
            <ul>
                {sections.map((section) => (
                    <li>
                        <span className={`${currentSection.name === section.name && 'navActive'}`}
                            key={section.name}
                            onClick={() => { setCurrentSection(section) }}>{section.name}
                        </span>
                    </li>
                ))}
            </ul>
        </nav >
    )
}

export default Navigation;