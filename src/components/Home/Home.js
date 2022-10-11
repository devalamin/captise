import React, { useContext } from 'react';
import { QuizContext } from '../layout/Main';
import Topic from '../Topic/Topic';


const Home = () => {
    const getQuiz = useContext(QuizContext).data;
    console.log(getQuiz)

    return (
        <div>
            <div className='text-start ml-10 px-10'>
                <h1 className='text-6xl font-semi-bold text-teal-800'>Grow Your Knowledge</h1>
                <div className='grid grid-cols-2 m-10 p-10 gap-10'>
                    {
                        getQuiz.map(quiz => <Topic
                            key={quiz.id}
                            quiz={quiz}></Topic>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;