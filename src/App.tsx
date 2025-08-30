import { useTranslation } from "react-i18next";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.js";
import Dashboard from "./pages/Dashboard.js";
import Dummy from "./pages/Dummy.js";

const App = () => {
  const { t } = useTranslation();

  const router = createBrowserRouter([
    { path: "/", 
      element: <RootLayout />, 
      children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dummy", element: <Dummy /> },
    ]},
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
