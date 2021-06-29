import React from 'react';

function Title(props) {
    const { title,subTitle}= props;
    return (
        <div className="Title">
            <h3>
            {title}
                <span>{subTitle}</span>
            </h3>
        </div>
    );
}

export default Title;