import React from 'react';
import { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
const Meals= () =>{
    const [meals, setMeals] = useState([]);
    useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(res => res.json())
      .then(data => setMeals(data.categories));
    },[])
    return(
      <div>
        <h2>Loading meals</h2>
        <h4>Meals Catagory Available:{meals.length}</h4>
        {
          meals.map(meal => <Meal name={meal.strCategory } description={meal.strCategoryDescription } pic={meal.strCategoryThumb}></Meal>)
        }
      </div>
    )
  }

export default Meals;