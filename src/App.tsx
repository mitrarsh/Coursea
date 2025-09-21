import { useTranslation } from "react-i18next";
import { createHashRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.js";
import Dashboard from "./pages/Dashboard.js";
import Dummy from "./pages/Dummy.js";
import { useEffect } from "react";
import ExploreCourses from "./pages/ExploreCourses.js";
import MyCourses from "./pages/MyCourses.js";
import Mentors from "./pages/Mentors.js";
import Message from "./pages/Message.js";
import Setting from "./pages/Setting.js";

const App = () => {
  const { t ,i18n } = useTranslation();

  useEffect(() => {
    const dir = i18n.language === "fa" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  }, [i18n.language]);

  const router = createHashRouter([
    { path: "/", 
      element: <RootLayout />, 
      children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dummy", element: <Dummy /> },
      {children:[
        { path: "/courses/explore-courses", element: <ExploreCourses /> },
        { path: "/courses/my-courses", element: <MyCourses /> },
      ]},
      { path: "/mentors", element: <Mentors /> },
      { path: "/message", element: <Message /> },
      { path: "/setting", element: <Setting /> },
    ]},
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
