import React from "react";

function GetApiCall({ userData, isLoading }) {
  return (
    <div>
      {isLoading && <b>Loading...</b>}
      {userData.map((i) => (
        <p> {i.title} </p>
      ))}
    </div>
  );
}

export default GetApiCall;
