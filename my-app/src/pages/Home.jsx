import React from "react";

import Categories from "../components/categories";
import Sort from "../components/sort";
import PizzaItem from "../components/pizza_item";
import Skeleton from "../components/pizza_item/skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://63bf4138a177ed68abae098d.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaItem key={obj.id} {...obj} />)}
      </div>
    </>
  );
};

export default Home;
