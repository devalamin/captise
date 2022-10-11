import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {
    const singleQuiz = useLoaderData().data;
    const allQuestions = singleQuiz.questions;

    return (
        <div className='border-2 border-teal-100 sm:p-10'>
            <h1 className='text-xl md:text-5xl sm:text-2xl sm:font-bold md:font-bold text-teal-800'>Quiz About {singleQuiz.name}</h1>
            {
                allQuestions.map(question => <Quiz
                    key={question.id}
                    question={question} ></Quiz>)
            }
        </div>
    );
};

export default QuizDetails;