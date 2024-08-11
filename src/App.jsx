import React, { Suspense, lazy, useEffect, useReducer, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const Grocery = lazy(() => import("./components/Grocery")); //lazy loading/dynamic import / on demand loading/ to reduce the bundle size

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Aniket Singh",
    };
    setUserName(data?.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: (
      <Suspense fallback={<Shimmer />}>
        <ErrorPage />
      </Suspense>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
