import React from "react";

export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.photos?.length) {
    return "";
  }
  if (!className) {
    className = "h-full object-cover";
  }
  return (
    <img
      className={className}
      src={"http://localhost:4000/uploads/" + place.photos[index]}
      alt=""
    />
  );
}
