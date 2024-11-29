const IngredientList = ({ ingredients, addIngredient }) => {
    return (
      <div>
        <h2>Available Ingredients</h2>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.name} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
              <button onClick={() => addIngredient(ingredient)}>
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default IngredientList;