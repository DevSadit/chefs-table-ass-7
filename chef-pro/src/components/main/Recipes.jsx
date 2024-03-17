import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = ({ handleAddtocartBtn }) => {
  const [recepies, setRecepies] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setRecepies(data));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-6">
      {recepies.map((recipe) => (
        <Recipe
          key={recipe.recipe_id}
          recipe={recipe}
          handleAddtocartBtn={handleAddtocartBtn}
        ></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
