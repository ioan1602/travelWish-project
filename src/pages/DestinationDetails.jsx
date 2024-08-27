import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import destinations from "../api/locationsObject";
import { FavoritesContext } from "../store/Favorites/context";
import { addToFavorites, removeFromFavorites } from "../store/Favorites/actions";
import Layout from "../components/Layout";
import "./../css/detailsPage.css";
import Button from "react-bootstrap/Button";

const DestinationDetails = () => {
  const { id } = useParams();
  const destination = destinations.find((dest) => dest.id === id);
  const { favoriteState, favoriteDispatch } = useContext(FavoritesContext);

  if (!destination) {
    return <h2>Destination not found!</h2>;
  }

  const isFavorite = favoriteState.favorites.some(
    (item) => item.id === destination.id
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      favoriteDispatch(removeFromFavorites(destination));
    } else {
      favoriteDispatch(addToFavorites(destination));
    }
  };

  return (
    <Layout>
      <div className="row">
        <div className="col-md-6 image-container">
          <img src={destination.image} alt={destination.city} />
        </div>

        <div className="col-md-6 content-container">
          <div>
            <h1 className="title">
              {destination.city}, {destination.country}{" "}
              <Button
                style={{ backgroundColor: "#005962", border: "none", marginLeft: "30px"}}
                onClick={handleToggleFavorite}
              >
                {isFavorite ? "Remove" : "Add to Favorites"} {}
              </Button>
            </h1>
          </div>

          <h3>Important Places</h3>
          <ul className="landmarks">
            {destination.landmarks.map((landmark, index) => (
              <li key={index}>{landmark}</li>
            ))}
          </ul>

          <h3>Activities</h3>
          <ul className="activities">
            {destination.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>

          <h3>Special Recommendation</h3>
          <p>{destination.specialRecommendation}</p>
        </div>

        <div className="col-md-12 details-container">
          <h3>Details</h3>
          <p>{destination.detailedDescription}</p>
        </div>
      </div>
    </Layout>
  );
};

export default DestinationDetails;
