import PropTypes from "prop-types";

const SideBar = ({ addToCart }) => {
  return (
    <div className="h-screen w-1/3 border border-[#28282833] text-center rounded-lg p-8">
      <h1 className="font-semibold text-2xl">
        Want to cook: {addToCart.length}
      </h1>
    </div>
  );
};

SideBar.propTypes = {
  addToCart: PropTypes.object,
};
export default SideBar;
