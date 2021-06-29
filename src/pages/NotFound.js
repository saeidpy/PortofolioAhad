import React, { useEffect } from 'react';

function NotFound(props) {

    useEffect(()=>{
        document.title= "Not Found!";        
    }, [])
    return (
    <div className="notFound">

        <img className="notFoundImg" src="/images/Notfound.png"/>
    </div>
    );
}

export default NotFound;