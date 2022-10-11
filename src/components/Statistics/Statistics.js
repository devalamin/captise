import React, { useContext } from 'react';
import { QuizContext } from '../layout/Main';

const Statistics = () => {
    const quizTotal = useContext(QuizContext).data;
    console.log(quizTotal)
    return (
        <div>
            <h2>This is statistics</h2>

        </div>
    );
};

export default Statistics;