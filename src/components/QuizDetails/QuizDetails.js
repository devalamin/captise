import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const singleQuiz = useLoaderData().data;
    console.log(singleQuiz)

    return (
        <div>
            <h1>Quiz About {singleQuiz.name}</h1>
        </div>
    );
};

export default QuizDetails;