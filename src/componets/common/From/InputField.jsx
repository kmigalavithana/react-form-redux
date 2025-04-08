import PropTypes from "prop-types";
const InputField = ({ type, name, lablename, handleInputFeild }) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {lablename}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="Inputfeield"
        onChange={handleInputFeild}
        required
      />
    </div>
  );
};

InputField.defaultProps = {
  type: PropTypes.string.isRequired,
  lablename: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleInputFeild: PropTypes.func.isRequired,
};
export default InputField;
