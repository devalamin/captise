import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Otions.css'

const Options = ({ singleOption, handleClick, ToastContainer }) => {
    const circle = <FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>
    return (
        <div>

            <button onClick={() => handleClick(singleOption)} className='option focus:border-teal-400 text-3xl border-4 border-teal-700 py-5 px-44 shadow-lg'>
                <span className='mr-6 text-sm'>{circle}</span>
                {singleOption}
            </button>

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Options;