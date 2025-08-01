import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Menu from "../pages/Menu";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Menu />,
      },
    ],
  },
]);
