import React from 'react';
import Link from 'next/link';

const GetStartedButton = (props: {text:string}) => {
    return (
        <button className="btn btn-primary" >
            <Link href="/signup">
                {props.text}
            </Link>
        </button>
    );
};

export default GetStartedButton;