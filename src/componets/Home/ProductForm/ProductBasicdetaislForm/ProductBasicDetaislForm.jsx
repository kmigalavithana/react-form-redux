import InputField from "../../../common/From/InputField.jsx";
import PropTypes from "prop-types";

const ProductBasicDetaislForm = ({handeleNextFormerendering}) => {
    return (
        <form className="max-w-sm mx-auto">
            <div>
                <h1 className="text-lg font-bold">Product Basic Details</h1>
            </div>
            <InputField
                type="text"
                lablename="Product Basic Details"
                name="product_name"
            />
            <InputField
                type="number"
                lablename="Product Quantity"
                name="product_Quantity"
            />
            <InputField
                type="number"
                lablename="Product Price"
                name="product_Price"
            />

            <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handeleNextFormerendering}
            >
               Fill Warrnty Details
            </button>
        </form>
    );
};

ProductBasicDetaislForm.propTypes = {
    handeleNextFormerendering: PropTypes.func.isRequired,
}
export default ProductBasicDetaislForm;