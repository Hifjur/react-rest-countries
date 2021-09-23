import React from 'react';
import './Meal.css'
const Meal = (props) => {
    return(
        <div className="meal">
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <img src={props.pic} alt="" />
        </div>
      );
};

export default Meal;