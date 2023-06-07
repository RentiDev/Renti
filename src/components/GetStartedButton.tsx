import React from 'react';
import Link from 'next/link';

const GetStartedButton = (props: {text:string}) => {
    return (
        <button className="text-l btn text-white border-0 bg-indigo-600 hover:bg-indigo-700 " >
            <Link href="/signup">
                {props.text}
            </Link>
        </button>
    );
};

export default GetStartedButton;