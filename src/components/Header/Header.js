import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-10 m-10'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-4xl font-bold text-teal-600'>Captise</h2>
                </div>
                <div className='flex flex-col sm:flex-row'>
                    <NavLink className='sm:text-2xl text-teal-600 my-3 mx-3' to='/home'>Home</NavLink>
                    <NavLink className='sm:text-2xl text-teal-600 my-3 mx-3' to='/topics'>Topics</NavLink>
                    <NavLink className='sm:text-2xl text-teal-600 my-3 mx-3' to='/stats'>Statistics</NavLink>
                    <NavLink className='sm:text-2xl text-teal-600 my-3 mx-3' to='/blogs'>Blog</NavLink>
                    <NavLink className='sm:text-2xl text-teal-600 my-3 mx-3' to='/about'>About</NavLink>
                </div>

            </div>
        </div>
    );
};

export default Header;