import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Topic = ({ quiz }) => {

    const rightArrow = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>

    const { id, logo, name, total } = quiz;
    return (
        <div>
            <div className='shadow-md bg-gradient-to-l from-cyan-300 to-slate-500 rounded'>
                <img className='rounded' src={logo} alt="" />
                <div className='flex justify-between bg-white p-2'>
                    <h1 className='bg-white sm:p-2 sm:text-2xl'>{name}</h1>
                    <p className='sm:text-xl md:text-xl text-teal-800'>Questions : {total}</p>
                    <Link to={`/topics/${id}`}>
                        <button className='flex items-center '>
                            <h4 className='sm:text-2xl'>Start</h4>
                            <p className='ml-2 sm:text-xl text-teal-800'>{rightArrow}</p>
                        </button></Link>
                </div>
            </div>

        </div>
    );
};

export default Topic;