import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/editor/:id",
    element: <Editor />,
  },
]);

export default routes;
