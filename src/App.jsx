import './App.css';
import React, { useState } from 'react';
import IngredientList from './components/IngredientList.jsx';
import BurgerStack from './components/BurgerStack.jsx';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [burgerStack, setBurgerStack] = useState([]);

  const addToBurger = (ingredient) => {
    setBurgerStack((prevStack) => [...prevStack, ingredient]);
  };

  const removeFromBurger = (ingredientName) => {
    setBurgerStack((prevStack) => prevStack.filter((ingredient) => ingredient.name !== ingredientName));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          addIngredient={addToBurger}
        />
        <BurgerStack
          ingredients={burgerStack}
          removeIngredient={removeFromBurger}
        />
      </section>
    </main>
  );
};

export default App;
