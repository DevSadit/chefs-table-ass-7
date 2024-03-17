import PropTypes from "prop-types";

const Sidebarcard = ({miniCard}) => {
    const { recipe_name, preparing_time, calories } = miniCard;
  return (
    <div>
      <table className="table mb-2 rounded-lg">
        <tr className="bg-base-200">
          <td>{recipe_name}</td>
          <td>{preparing_time}</td>
          <td>{calories}</td>
          <td>
            <button className=" bg-[#0BE58A] font-semibold rounded-full px-4 py-2">
              Preparing
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};


Sidebarcard.propTypes ={
    miniCard: PropTypes.object,
}
export default Sidebarcard;
