import React from 'react';

const Topic = ({ quiz }) => {
    const { id, logo, name } = quiz;
    console.log(quiz);
    return (
        <div>
            <div className='shadow-md bg-slate-600 rounded'>
                <img className='rounded' src={logo} alt="" />
                <div className='flex justify-between bg-white p-2'>
                    <h1 className='bg-white p-2 text-2xl'>{name}</h1>
                    <button>
                        <h4 className='text-2xl'>Start</h4>
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Topic;