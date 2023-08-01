import React, { useState } from 'react';

 

function RatingInput() {
  const [rating, setRating] = useState(null);

 

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  console.log(rating)

 

  return (
<div className="rating">
<input type="radio" id="star5" name="rating" value="5" onChange={handleRatingChange} />
<label htmlFor="star5"></label>

 

      <input type="radio" id="star4" name="rating" value="4" onChange={handleRatingChange} />
<label htmlFor="star4"></label>

 

      <input type="radio" id="star3" name="rating" value="3" onChange={handleRatingChange} />
<label htmlFor="star3"></label>

 

      <input type="radio" id="star2" name="rating" value="2" onChange={handleRatingChange} />
<label htmlFor="star2"></label>

 

      <input type="radio" id="star1" name="rating" value="1" onChange={handleRatingChange} />
<label htmlFor="star1"></label>
</div>
  );
}

 

export default RatingInput;