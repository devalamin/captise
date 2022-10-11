import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

export const QuizContext = createContext([]);
const Main = () => {
    const allQuiz = useLoaderData();
    return (

        <div>
            <QuizContext.Provider value={allQuiz}>
                <Header></Header>
                <Outlet></Outlet>
            </QuizContext.Provider>
        </div>
    );
};

export default Main;