import React from "react";

import MenuHeader from "./components/header";
import Categories from "./components/categories";
import Sort from "./components/sort";
import PizzaItem from "./components/pizza_item";
import Pizzas from "../src/assets/pizzas.json";

import "./scss/app.scss";

function App() {
  return (
    <div className="wrapper">
      <MenuHeader />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {Pizzas.map((obj) => (
              <PizzaItem key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
