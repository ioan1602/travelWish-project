import React, { useState } from "react";
import destinations from "../api/locationsObject";
import DestinationCard from "../components/destinationCard";
import "./../css/home.css";
import Layout from "../components/Layout";
import ReactPaginate from "react-paginate";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = destinations.filter(
      (destination) =>
        destination.city.toLowerCase().includes(value) ||
        destination.country.toLowerCase().includes(value)
    );
    setFilteredDestinations(filtered);
    setCurrentPage(0);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredDestinations.slice(
    offset,
    offset + itemsPerPage
  );
  const pageCount = Math.ceil(filteredDestinations.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <Layout>
      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search by city, country..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="card-container">
          {currentItems.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          disabledClassName={"disabled"}
          previousClassName={"previous"}
          nextClassName={"next"}
        />
      </div>
    </Layout>
  );
}

export default Home;
