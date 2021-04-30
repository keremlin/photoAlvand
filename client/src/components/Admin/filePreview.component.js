import React from 'react';
export default function FilePreview (props) {
    return (
        <>
            <img src={props.src} className="img-fluid" alt="preview"></img>
        </>
    );
}