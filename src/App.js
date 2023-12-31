import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ErrorElement from "./components/ErrorElement";
import Cart from "./components/Cart";
import ResturantMenu from "./components/ResturantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restuarant/:id",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

// TODO: its object after rendering to the DOM its convert to HTML
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

