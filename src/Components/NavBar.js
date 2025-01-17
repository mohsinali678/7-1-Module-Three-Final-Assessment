import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    const imageStyle = {
        height:"50px",
        width:"50px"
    }
    const imageSource = "https://previews.123rf.com/images/damedeeso/damedeeso1207/damedeeso120700004/14355372-dog-watching-a-movie-with-popcorn-and-coke.jpg"

    const navStyle = {
        display:"flex",
        justifyContent: "space-around",
        height:"55px",
        backgroundColor:"#7FFED3"
    }
  return (
    <div>
      <nav style={navStyle}>
        <Link to="/">
          <img
            src={imageSource}
            alt="dogWithPopcorn logo"
            style={imageStyle}
          />
        </Link>{" "}
        <Link to="/movies">Movies</Link>
        {" "}
        <Link to="/people">People</Link>
        {" "}
        <Link to="/locations">Locations</Link>
      </nav>
    </div>
  );
};

export default NavBar;
