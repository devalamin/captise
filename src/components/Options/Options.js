import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Options = ({ singleOption, handleClick }) => {
    const circle = <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
    // console.log(singleOption)
    return (
        <div>

            <h2 onClick={() => handleClick(singleOption)} className='text-3xl border-4 border-teal-700 p-14 shadow-lg box-border'>
                <span className='mr-6 text-sm'>{circle}</span>
                {singleOption}
            </h2>
        </div>
    );
};

export default Options;