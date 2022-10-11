import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Main from './components/layout/Main';
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
        { path: '/topics', element: <Topics></Topics> },
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
