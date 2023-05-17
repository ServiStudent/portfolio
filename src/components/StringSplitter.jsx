import React from 'react';

const StringSplitter = ({ inputString }) => {
    const splitString = inputString.split('- ').map((item, index) => index === 0 ? null  : (
        <li className="text-white tracking-wider text-[14px]" key={index}>• {item}</li>
    ));
    return <ul>{splitString}</ul>;
};

export default StringSplitter;