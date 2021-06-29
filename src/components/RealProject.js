import React from 'react';

function RealProject(props) {
    const { title, institute, date,link } = props;
    return (
        <div className="certificateSection" >
            <div className="certificateContainer">
                <div className="logoContainer">
                    <img className="logo" src="./images/githublogo.png" />

                </div>
                <div className="paragraphContainer">
                    <p className="courseTitle">{title}</p>
                    <p className="courseInstitute">{institute}</p>
                    <p className="courseDate">{date}</p>
                    {/* <a className="courseLink">{link}</a> */}


                </div>
            </div>

        </div>
    );
}

export default RealProject;