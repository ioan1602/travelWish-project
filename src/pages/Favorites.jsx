import React, { useContext } from "react";
import { FavoritesContext } from "../store/Favorites/context";
import DestinationCard from "../components/destinationCard";
import Layout from "../components/Layout";

const Favorites = () => {
  const { favoriteState } = useContext(FavoritesContext);

  return (
    <Layout>
      <div>
        <h1>Favorites</h1>
        {favoriteState.favorites.length === 0 ? (
          <p>You have no favorite destinations yet!</p>
        ) : (
          <div className="card-container">
            {favoriteState.favorites.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
