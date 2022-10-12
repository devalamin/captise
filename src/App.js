import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './components/layout/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';

function App() {

  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>,
      loader: () => {
        return fetch('https://openapi.programming-hero.com/api/quiz')
      },
      children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/topics', element: <Home></Home> },
        {
          path: '/topics/:quizId',
          loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        { path: '/stats', element: <Statistics></Statistics> },
        { path: '/blogs', element: <Blogs></Blogs> },

      ]
    },
    { path: '*', element: <Error></Error> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
