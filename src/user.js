import React from "react";

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>;
  }

  return (
    <div className="friend container">
      <h2>{details.firstName}</h2>
      <h2>{details.lastName}</h2>
      <p>Email: {details.email}</p>
        </div>
      )}

export default User;
