import React from 'react';

const GetStartedButton = (props: {text:string}) => {
    return (
        <button className="btn btn-primary" >{props.text}</button>
    );
};

export default GetStartedButton;