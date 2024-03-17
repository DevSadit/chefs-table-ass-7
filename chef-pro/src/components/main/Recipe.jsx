import { GoClock } from "react-icons/go";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="rounded-lg border border-[#282828] p-6">
      <figure className="">
        <img src={recipe_image} alt="Foods" className="rounded-xl" />
      </figure>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">{recipe_name}</h2>
        <p className="my-4 text-[#878787]">{short_description}</p>
        <hr />
        <div className="mt-6">
          <h3>Ingredients:</h3>
          <ul>
            <li></li>
          </ul>
        </div>
        <hr className="text-[#2828281A]" />

        <div className="flex gap-x-4  my-6">
          <div className="flex items-center gap-x-1">
            <GoClock />
            <p>{preparing_time}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <FaFire />
            <p>{calories}</p>
          </div>
        </div>
        <div className="card-actions">
          <button className="btn bg-[#0BE58A] font-semibold rounded-full">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
