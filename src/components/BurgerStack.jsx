const BurgerStack = ({ ingredients, removeIngredient }) => {
    const reversedIngredients = [...ingredients].reverse();  
  
    return (
      <div>
        <h2>Your Burger</h2>
        <ul>
          {reversedIngredients.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => removeIngredient(ingredient.name)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BurgerStack;