const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

export const initialState = {
  favorites: storedFavorites,
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      const isAlreadyFavorite = state.favorites.some(
        (item) => item.id === action.payload.id
      );
      if (isAlreadyFavorite) {
        return state;
      }
      const updatedFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      return {
        ...state,
        favorites: updatedFavorites,
      };

    case "REMOVE_FROM_FAVORITES":
      const filteredFavorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
      return {
        ...state,
        favorites: filteredFavorites,
      };

    default:
      return state;
  }
};
