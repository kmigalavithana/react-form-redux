import InputField from "../../../common/From/InputField.jsx";
import PropTypes from "prop-types";
import FromHandlingButton from "../../../common/From/FromHandlingButton.jsx";

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
            <FromHandlingButton executingMethod={handeleNextFormerendering} buttonName='Fill Warranty Detailes'/>
        </form>
    );
};

ProductBasicDetaislForm.propTypes = {
    handeleNextFormerendering: PropTypes.func.isRequired,
}
export default ProductBasicDetaislForm;