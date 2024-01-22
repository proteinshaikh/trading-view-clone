import React from "react";

const TechnologyList = () => {
    const technologies = [
        'react',
        'node js',
        'javascript',
        'java'
    ];


    return (
        <div>
            <h2> Popular Technologies</h2>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};


export default TechnologyList;