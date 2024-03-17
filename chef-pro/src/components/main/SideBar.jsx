import PropTypes from "prop-types";
import Sidebarcard from "./Sidebarcard";
import Sidecccard from "./Sidecccard";

const SideBar = ({ addToCart, handlePreparingBtn, addtocc }) => {
  return (
    <div className="h-screen w-1/3 border border-[#28282833] text-center rounded-lg">
      <div className="mt-8 mx-16">
        <h1 className="font-semibold text-2xl mb-4 mt-8 ">
          Want to cook: {addToCart.length}
        </h1>
        <hr />
        <table className="table mb-4">
          <tr>
            <td>Name</td>
            <td>Time</td>
            <td>Calories</td>
          </tr>
        </table>
      </div>
      {addToCart.map((miniCard, i) => (
        <Sidebarcard
          key={miniCard.recipe_id}
          miniCard={miniCard}
          i={i}
          handlePreparingBtn={handlePreparingBtn}
        ></Sidebarcard>
      ))}
      <div className="mt-8 mx-16">
        <h1 className="font-semibold text-2xl mb-4">Currently cooking:</h1>
        <hr />
        <table className="table mb-4">
          <tr>
            <td>Name</td>
            <td>Time</td>
            <td>Calories</td>
          </tr>
        </table>
        <Sidecccard addtocc={addtocc}></Sidecccard>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  addToCart: PropTypes.object,
  handlePreparingBtn: PropTypes.object,
  addtocc: PropTypes.object,
};
export default SideBar;
