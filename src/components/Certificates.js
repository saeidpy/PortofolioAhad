import React from 'react';

function Certificates(props) {
    const { title, institute, date,link,onClick } = props;



    return (
        <div className="certificateSection" >
            <div className="certificateContainer">
                <div className="logoContainer">
                    <img className="logo" src="./images/certificateLogo.png" />

                </div>
                <div className="paragraphContainer">
                    <p className="courseTitle">{title}</p>
                    <p className="courseInstitute">{institute}</p>
                    <p className="courseDate">{date}</p>
                    <button onClick={onClick}  className="btnCertificate">{'Download'}
                </button>

                </div>
            </div>

        </div>
    );
}

export default Certificates;