import React from 'react';
import { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'
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
        <div className='grid'>
        {
          meals.map(meal => <Meal 
            key={meal.idCategory}
            name={meal.strCategory} 
            description={meal.strCategoryDescription } 
            pic={meal.strCategoryThumb}
            ></Meal>)
        }
        </div>
      </div>
    )
  }

export default Meals;