import InputField from "../../../common/From/InputField.jsx";
import PropTypes from "prop-types";
import FromHandlingButton from "../../../common/From/FromHandlingButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  resetProductBasicdetails,
  storeproductBasicdetails,
} from "../../../../utilities/slice/productbasicDetailsSlice.js";
import { useEffect, useState } from "react";
import reset from '../../../../assets/icons/undo.png'

const ProductBasicDetaislForm = ({
  handeleNextFormerendering,
  productBasicDetails,
  setProductBasicDetails,
}) => {
  const [existingProductDetails, setExistingProductDetails] = useState();

  const dispatch = useDispatch();

  const alreadyAddProductBasicDetails = useSelector(
    (state) => state.productDetails.productBasicDetails,
  );

  useEffect(() => {
    setExistingProductDetails(alreadyAddProductBasicDetails);
  }, [alreadyAddProductBasicDetails]);
  const handleInputFeild = (event) => {
    const { name, value } = event.target;

    setProductBasicDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(storeproductBasicdetails(existingProductDetails));
    handeleNextFormerendering();
  };

  const resetBasicDetailsForm = () => {
    dispatch(resetProductBasicdetails());
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <button type="button" onClick={resetBasicDetailsForm}>
          <img src={reset} alt="Reset Basic Details" />
      </button>
      <div>
        <h1 className="text-lg font-bold">Product Basic Details</h1>
      </div>
      <InputField
        type="text"
        lablename="Product Name"
        name="product_name"
        value={productBasicDetails.product_name}
        handleInputFeild={handleInputFeild}
      />
      <InputField
        type="number"
        lablename="Product Quantity"
        name="product_Quantity"
        value={productBasicDetails.product_Quantity}
        handleInputFeild={handleInputFeild}
      />
      <InputField
        type="number"
        lablename="Product Price"
        name="product_Price"
        value={productBasicDetails.product_Price}
        handleInputFeild={handleInputFeild}
      />
      <FromHandlingButton buttonName="Fill Warranty Detailes" />
    </form>
  );
};

ProductBasicDetaislForm.propTypes = {
  productBasicDetails: PropTypes.object.isRequired,
  setProductBasicDetails: PropTypes.func.isRequired,
  handeleNextFormerendering: PropTypes.func.isRequired,
};
export default ProductBasicDetaislForm;
