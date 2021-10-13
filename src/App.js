import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Cookie",
    picture: "🍪",
    rating: 4.2
  },
  {
    id: 2,
    name: "Pizza",
    picture: "🍕",
    rating: 4.1
  },
  {
    id: 3,
    name: "Cake",
    picture: "🍰",
    rating: 4.7
  }
];

function Food ({name, picture, rating}){
  return (
    <div>
      <h2>I Like {name}</h2>
      <h3>{picture}</h3>
      <h4>{rating} / 5.0</h4>
    </div>
  );
};

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      <h2>My Favorite Food</h2>
      {foodILike.map(dish => (<Food 
      key={dish.id} 
      name={dish.name} 
      picture={dish.picture}
      rating={dish.rating} />))}
    </div>
  );
}

export default App;
