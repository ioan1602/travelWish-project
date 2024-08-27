export const addToFavorites = (destination) => {
  return {
    type: "ADD_TO_FAVORITES",
    payload: destination,
  };
};

export const removeFromFavorites = (destination) => {
  return {
    type: "REMOVE_FROM_FAVORITES",
    payload: destination,
  };
};
