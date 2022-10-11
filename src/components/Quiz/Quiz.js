import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Options from '../Options/Options';

const Quiz = ({ question }) => {
    const correct = question.correctAnswer;

    const quizOption = question.options;
    const eye = <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>

    const handleClick = (event) => {
        if (correct === event) {
            alert('This Is Correct answear')
        }
        else {
            alert('Upps,Wrong Ans')
        }
        // console.log(event)
    };
    // console.log(quizOption);
    return (
        <div>
            <div className='relative bg-teal-100 m-10 p-10 shadow-lg'>
                <span className='text-xl text-teal-700 absolute right-5 top-5'>{eye}</span>
                <h2 className='text-3xl m-10 text-teal-800'>Quiz: {question.question}</h2>
                <div className='grid grid-cols-2 gap-8 p-10'>
                    {
                        quizOption.map(singleOption => <Options
                            singleOption={singleOption}
                            handleClick={handleClick}
                        ></Options>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Quiz;