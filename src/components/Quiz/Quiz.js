import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Options from '../Options/Options';

const Quiz = ({ question }) => {
    const correct = question.correctAnswer;

    const quizOption = question.options;
    const eye = <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
    const rightAns = () => {
        toast.success(correct, { autoClose: 3000 })

    }

    const handleClick = (event) => {

        if (correct === event) {
            toast.success('Correct Answer,Great!!', { autoClose: 1000, position: toast.POSITION.TOP_CENTER })
        }
        else {
            toast.error('Uppss,Wrong Answer', { autoClose: 500, position: toast.POSITION.TOP_CENTER })
        }

    };

    return (
        <div>
            <div className='relative bg-teal-100 m-10 p-10 shadow-lg'>
                <span onClick={rightAns} className='cursor-pointer text-xl text-teal-700 absolute right-5 top-5'>{eye}</span>
                <ToastContainer></ToastContainer>
                <h2 className='text-3xl m-10 text-teal-800'>Quiz: {question.question}</h2>
                <div className='grid grid-cols-2 gap-8 p-10'>
                    {
                        quizOption.map(singleOption => <Options
                            singleOption={singleOption}
                            handleClick={handleClick}
                            ToastContainer={ToastContainer}
                        ></Options>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Quiz;