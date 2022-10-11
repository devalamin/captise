import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className=' text-teal-800 text-4xl font-bold'>Blog page</h1>
            <div>
                <div className='border-4 rounded border-teal-800 p-10 m-10'>
                    <h1 className='text-start text-3xl mb-10'>Question:<span className='font-bold text-teal-700 '>What Is The Purpose/Usage Of React Router?</span> </h1>
                    <p className='text-start text-xl'>
                        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                    </p>
                </div>
                <div className='border-4 rounded border-teal-800 p-10 m-10'>
                    <h1 className='text-start text-3xl mb-10'>Question:<span className='font-bold text-teal-700 '>How does context api works?</span> </h1>
                    <p className='text-start text-xl'>
                        The React Context API has been around as an experimental feature for a while now, but only in React's version 16.3.0 did it become safe to use in production. The article below will show you two basic web store apps, one built with the Context API and one without it.
                        It works like a tower.It provides data from one place to many places.
                        This new API solves one major problem-prop drilling. Even if you're not familiar with the term, if you've worked on a React.js app, it has probably happened to you. Prop drilling is the processing of getting data from component A to component Z by passing it through multiple layers of intermediary React components. Component will receive props indirectly and you, the React Developer will have to ensure everything works out right.

                    </p>
                </div>
                <div className='border-4 rounded border-teal-800 p-10 m-10'>
                    <h1 className='text-start text-3xl mb-10'>Question:<span className='font-bold text-teal-700 '>Usage of useRef hook in React</span> </h1>
                    <p className='text-start text-xl'>
                        The useRef hook is a built-in React hook that takes one argument or parameter as its initial value and returns a reference. The reference has an interesting and useful property called current.One of the most useful features of the useRef hook is that the data or value in a reference or ref remains the same, even after component re-rendering. Also, if you update a reference, it does not affect the rendering of the app, unlike states.

                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;