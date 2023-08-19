import React from "react";

function Card({ backgroundImage }) {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`, // Menggunakan prop backgroundImage
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "200px",
    height: "400px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "25px",
  };

  return (
    <div style={cardStyle}>
      <h1>Live</h1>
    </div>
  );
}

export default Card;
