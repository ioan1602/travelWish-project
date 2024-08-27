import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FavoritesContext } from "../store/Favorites/context";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/Favorites/actions";
import { Link } from "react-router-dom";
import "./../css/card.css";

var DestinationCard = ({ destination }) => {
  const { favoriteState, favoriteDispatch } = useContext(FavoritesContext);

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
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Link
          to={`/destination/${destination.id}`}
          style={{ textDecoration: "none" }}
        >
          <Card.Img
            className="card-img"
            variant="top"
            src={destination.image}
            alt={destination.city}
            style={{ height: "12rem" }}
          />
          <Card.Title style={{ color: "#005962" }}>
            {destination.city}, {destination.country}
          </Card.Title>
          <Card.Text style={{ height: "5rem" }} className="description">
            {destination.description}
          </Card.Text>
        </Link>
        <Button onClick={handleToggleFavorite}>
          {isFavorite ? "Remove" : "Add to Favorites"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default DestinationCard;
