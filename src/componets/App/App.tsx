import Home from "../../pages/Home/Home";
import RepositoryPage from "../../pages/RepositoryPage/RepositoryPage";
import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "repository/:login/:repositoryName",
    element: <RepositoryPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
