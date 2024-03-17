import { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Recipes = () => {
  const [recepies, setRecepies] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setRecepies(data));
  }, []);
  return (
    <div className="w-2/3 border border-red-500">
      <h1>{recepies.length}</h1>
      {recepies.map((recipe) => (
        <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
      ))}
    </div>
  );
};

export default Recipes;
