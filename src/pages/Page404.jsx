import React from "react";
import { Link } from "react-router-dom";
import "./../css/page404.css";

const Page404 = () => {
  return (
    <div className="page404-container">
      <h1>Page404</h1>
      <h4>
        Oops! It looks like this destination is no longer on the map. Let's get
        back on track and find new places to explore!
      </h4>
      <Link to="/home">Go Back</Link>
    </div>
  );
};

export default Page404;
