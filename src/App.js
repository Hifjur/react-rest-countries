import './App.css';
import Meals from './Compnents/Meals/Meals';

//rest counties is dead so I made it wiht mealdb food
function App() {
  return (
    <div className="App">
      {/* <Meals></Meals> */}
      <Meals></Meals>
    </div>
  );
}




/*
function Meals(){
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

function Meal(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <img src={props.pic} alt="" />
    </div>
  )
}*/
export default App;
