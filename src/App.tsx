import { useTranslation } from "react-i18next";
import Dashboard from "./pages/Dashboard.js";
import RootLayout from "./layouts/RootLayout.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {


  const { t } = useTranslation();

  const router= createBrowserRouter([
    {path:'/',element: <RootLayout/>}
  ])

  return (
    <RouterProvider router={router}></RouterProvider>
  );
};

export default App;
