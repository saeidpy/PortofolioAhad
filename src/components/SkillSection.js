import React from 'react';
import "react-step-progress-bar/styles.css";

import { ProgressBar } from "react-step-progress-bar";

function SkillSection(props) {
    const { skill, label, percent } = props
    return (
        <div className="SkillsSection">
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{label}</p>
                    <div className="skill-progress">
                    <ProgressBar
                            percent={percent}
                            filledBackground="linear-gradient(to right, #037FFF)"
                            width="100%"
                            height="7px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SkillSection;