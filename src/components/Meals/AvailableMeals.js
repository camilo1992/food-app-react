import classes from "./AvailableMeals.module.css";
import Card from "../../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import useHttpRequest from "../../custom hooks/useRequest";

const AvailableMeals = (props) => {
  const [movies, setMovies] = useState([]);

  const { isLoading, dataSent, sendRequest, error } = useHttpRequest();

  const applyRequestedData = (data) => {
    const { menu } = data;
    const meals = [];

    for (let key in menu) {
      meals.push({
        id: key,
        name: menu[key].name,
        description: menu[key].description,
        price: menu[key].price,
      });
    }
    setMovies(meals);
  };

  const bringMenu = async () => {
    sendRequest(
      {
        url: "https://food-react-47e6c-default-rtdb.firebaseio.com/.json",
      },
      applyRequestedData
    );
  };

  useEffect(() => {
    bringMenu();
  }, []);

  const meals = movies.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content;

  if (isLoading) {
    content = <p className={classes.error}>Loading ...</p>;
  } else if (error) {
    content = <p className={classes.error}>{error}</p>;
  } else {
    content = <ul>{meals}</ul>;
  }

  return (
    <section className={classes.meals}>
      <Card>{content}</Card>
    </section>
  );
};

export default AvailableMeals;
