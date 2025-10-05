import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home.jsx";
import ListBooks from "./Pages/ListBooks.jsx";
import PagesToRead from "./Pages/PagesToRead.jsx";
import SubApp from "./SubApp.jsx";
import { MoonLoader } from "react-spinners";
import BookDetails from "./Components/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: SubApp,
    children: [
      {
        index: true,
        path: "/",
        // errorElement: <h1>page not found</h1>,
        Component: Home,
        hydrateFallbackElement: (
          <MoonLoader className="mx-auto my-50" color="#32d2b5" />
        ),
        loader: () => fetch(`booksData.json`),
      },
      {
        path: "/listBooks",
        Component: ListBooks,
        loader: () => fetch(`booksData.json`),
      },
      {
        path: "/pagesToRead",
        Component: PagesToRead,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch(`booksData.json`),
        Component: BookDetails,
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
