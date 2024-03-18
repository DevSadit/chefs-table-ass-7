import PropTypes from "prop-types";
const Sidecccard = ({ addtocc }) => {
  console.log(addtocc);
  const { recipe_name, preparing_time, calories } = addtocc;
  return (
    <div>
      <table className="table mb-2 rounded-lg">
        <tr className="bg-base-200">
          <td>{recipe_name}</td>
          <td>{preparing_time}</td>
          <td>{calories}</td>
        </tr>
      </table>
    </div>
  );
};
Sidecccard.propTypes = {
  addtocc: PropTypes.object,
};
export default Sidecccard;
