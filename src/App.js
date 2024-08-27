import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import Favorites from "./pages/Favorites";
import DestinationDetails from "./pages/DestinationDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import { FavoritesContext } from "./store/Favorites/context";
import { useReducer } from "react";
import { favoritesReducer, initialState } from "./store/Favorites/reducer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <Page404 />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/destinationDetails",
    element: <DestinationDetails />,
  },
  {
    path: "/destination/:id",
    element: <DestinationDetails />,
  },
]);

function App() {
  const [favoriteState, favoriteDispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  const favoritesContextValue = {
    favoriteState,
    favoriteDispatch,
  };

  return (
    <FavoritesContext.Provider value={favoritesContextValue}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </FavoritesContext.Provider>
  );
}

export default App;
