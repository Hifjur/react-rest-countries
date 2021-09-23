import React from 'react';

const Meal = (props) => {
    return(
        <div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <img src={props.pic} alt="" />
        </div>
      );
};

export default Meal;