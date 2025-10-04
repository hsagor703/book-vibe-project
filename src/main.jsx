import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import ListBooks from "./Pages/ListBooks.jsx";
import PagesToRead from "./Pages/PagesToRead.jsx";
import SubApp from "./SubApp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: SubApp,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch(`booksData.json`),
      },
      {
        path: "/listBooks",
        Component: ListBooks,
      },
      {
        path: "/pagesToRead",
        Component: PagesToRead,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
