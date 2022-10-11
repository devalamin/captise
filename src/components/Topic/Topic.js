import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Topic = ({ quiz }) => {
    const rightArrow = <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>


    const { id, logo, name } = quiz;
    return (
        <div>
            <div className='shadow-md bg-slate-600 rounded'>
                <img className='rounded' src={logo} alt="" />
                <div className='flex justify-between bg-white p-2'>
                    <h1 className='bg-white p-2 text-2xl'>{name}</h1>
                    <Link to={`/topics/${id}`}>
                        <button className='flex items-center '>
                            <h4 className='text-2xl'>Start</h4>
                            <p className='ml-2 text-xl text-teal-800'>{rightArrow}</p>
                        </button></Link>
                </div>
            </div>

        </div>
    );
};

export default Topic;