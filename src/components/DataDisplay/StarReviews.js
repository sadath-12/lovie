import React, { useState } from "react";
import { StarOutline, Star } from "react-ionicons";
import { Rating } from "react-simple-star-rating";

const StarReviews = () => {
  const [rating, setRating] = useState(0); // initial rating
  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div className="flex items-center gap-1">
      <Star height="14px" width="14px" color="#E5602D" />
      <Star height="14px" width="14px" color="#E5602D" />
      <Star height="14px" width="14px" color="#E5602D" />
      <Star height="14px" width="14px" color="#E5602D" />
      <StarOutline height="" width="14px" color="#E5602D" />
    </div>
  );
};

export default StarReviews;
