
// import { BrowserRouter, Route, RouterProvider,
//    Routes, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home/home';
// import NotFound from './pages/NotFound/notFound';
// import AppLayout from './components/appLayout/appLayout';
// import RegisterUserFunc from './pages/Register/RegisterUserFunc';
// import LoginUserFun from './pages/Login/LoginUserFunc'
// import Movies   from'./pages/movies/MoviesList';
// import MoviesList from './pages/movies/MoviesList';
// import MoviesDetails from './pages/movies/MoviesDetails';
// import Favourite from './pages/movies/Favourite';
// import { store } from './Store/store';
// import { Provider } from 'react-redux';

// const router=createBrowserRouter([
//   {
//     path:"/",
//     element:<AppLayout/>,
//     children:[
//       {index:true,element:<Movies/>},
//       {path:"login",element:<LoginUserFun/>},
//       {path:"signup",element:<RegisterUserFunc/>},
      
//       {path:"Movies",element:<Movies/>,

//       children:[
//       {index:true,element:<MoviesList/>},

//       ]
//     },
//     {path:"details/:id",element:<MoviesDetails/>},
//     {path:"Favourite",element:<Favourite/>}

//     ]

//   },
//   {
//     path:"*",
//     element:<NotFound/>
//   }
// ])

// function App() {

//   return <div style={{backgroundColor:'black',height:"100vh" ,color:'white'}} ><Provider store={store}><RouterProvider router={router}/></Provider></div>
// }

// export default App







// import React, { useState } from 'react';
// import { BrowserRouter, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home/home';
// import NotFound from './pages/NotFound/notFound';
// import AppLayout from './components/appLayout/appLayout';
// import RegisterUserFunc from './pages/Register/RegisterUserFunc';
// import LoginUserFun from './pages/Login/LoginUserFunc';
// import Movies from './pages/movies/MoviesList';
// import MoviesList from './pages/movies/MoviesList';
// import MoviesDetails from './pages/movies/MoviesDetails';
// import Favourite from './pages/movies/Favourite';
// import { store } from './Store/store';
// import { Provider } from 'react-redux';

// const App = () => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <AppLayout theme={theme} toggleTheme={toggleTheme} />,
//       children: [
//         { index: true, element: <Movies theme={theme} toggleTheme={toggleTheme} /> },
//         { path: "login", element: <LoginUserFun theme={theme} /> },
//         { path: "signup", element: <RegisterUserFunc theme={theme} /> },

//         {
//           path: "Movies",
//           element: <Movies theme={theme} toggleTheme={toggleTheme} />,
//           children: [
//             { index: true, element: <MoviesList theme={theme} toggleTheme={toggleTheme} /> },
//           ]
//         },
//         { path: "details/:id", element: <MoviesDetails theme={theme} /> },
//         { path: "Favourite", element: <Favourite theme={theme} /> }
//       ]
//     },
//     {
//       path: "*",
//       element: <NotFound theme={theme} toggleTheme={toggleTheme} />
//     }
//   ]);

//   return (
//     <div>
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     </div>
//   );
// };

// export default App;






// import React, { useState } from 'react';
// import { BrowserRouter, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
// import Home from './pages/Home/home';
// import NotFound from './pages/NotFound/notFound';
// import AppLayout from './components/appLayout/appLayout';
// import RegisterUserFunc from './pages/Register/RegisterUserFunc';
// import LoginUserFun from './pages/Login/LoginUserFunc';
// import Movies from './pages/movies/MoviesList';
// import MoviesList from './pages/movies/MoviesList';
// import MoviesDetails from './pages/movies/MoviesDetails';
// import Favourite from './pages/movies/Favourite';
// import { store } from './Store/store';
// import { Provider } from 'react-redux';

// const App = () => {
//   const [theme, setTheme] = useState('light');

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <AppLayout theme={theme} toggleTheme={toggleTheme} />,
//       children: [
//         { index: true, element: <Movies theme={theme} toggleTheme={toggleTheme} /> },
//         { path: "login", element: <LoginUserFun theme={theme} /> },
//         { path: "signup", element: <RegisterUserFunc theme={theme} /> },
//         { path: "Movies", element: <Movies theme={theme} toggleTheme={toggleTheme} /> },
//         { path: "details/:id", element: <MoviesDetails theme={theme} toggleTheme={toggleTheme} /> },
//         { path: "Favourite", element: <Favourite theme={theme} toggleTheme={toggleTheme}/> }
//       ]
//     },
//     {
//       path: "*",
//       element: <NotFound theme={theme} toggleTheme={toggleTheme} />
//     }
//   ]);

//   return (
//     <div>
//       <Provider store={store}>
//         <RouterProvider router={router} />
//       </Provider>
//     </div>
//   );
// };

// export default App;





// App.js
import React, { useState } from 'react';
import { BrowserRouter, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import NotFound from './pages/NotFound/notFound';
import AppLayout from './components/appLayout/appLayout';
import RegisterUserFunc from './pages/Register/RegisterUserFunc';
import LoginUserFun from './pages/Login/LoginUserFunc';
import Movies from './pages/movies/MoviesList';
import MoviesList from './pages/movies/MoviesList';
import MoviesDetails from './pages/movies/MoviesDetails';
import Favourite from './pages/movies/Favourite';
import { store } from './Store/store';
import { Provider } from 'react-redux';

const App = () => {

  //theme mode
  // const [theme, setTheme] = useState('light');

  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <AppLayout theme={theme} toggleTheme={toggleTheme} />,
  //     children: [
  //       { index: true, element: <Movies theme={theme} toggleTheme={toggleTheme} /> },
  //       { path: "login", element: <LoginUserFun theme={theme} /> },
  //       { path: "signup", element: <RegisterUserFunc theme={theme} /> },
  //       { path: "Movies", element: <Movies theme={theme} toggleTheme={toggleTheme} /> },
  //       { path: "details/:id", element: <MoviesDetails theme={theme} toggleTheme={toggleTheme} /> },
  //       { path: "Favourite", element: <Favourite theme={theme} toggleTheme={toggleTheme}/> }
  //     ]
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound theme={theme} toggleTheme={toggleTheme} />
  //   }
  // ]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      children: [
        { index: true, element: <Movies/> },
        { path: "login", element: <LoginUserFun/> },
        { path: "signup", element: <RegisterUserFunc/> },
        { path: "Movies", element: <Movies/> },
        { path: "details/:id", element: <MoviesDetails/> },
        { path: "Favourite", element: <Favourite/> }
      ]
    }
  ]);

  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
};

export default App;
