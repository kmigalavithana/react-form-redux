import React from "react";
import InputField from "../../../common/From/InputField.jsx";
import PropTypes from "prop-types";
import FromHandlingButton from "../../../common/From/FromHandlingButton.jsx";

const ProductWarrantyDerailsForm = ({ handelePrevFormerendering }) => {


  return (
    <form className="max-w-sm mx-auto">
        <button type='button' onClick={handelePrevFormerendering}>Go back</button>
      <div>
        <h1 className="text-lg font-bold">Product Warranty Details</h1>
      </div>
      <InputField
        type="text"
        lablename="PWarranty Period"
        name="Warranty_Period"
      />
      <InputField
        type="date"
        lablename="warranty Start Date"
        name="warranty Start Date"
      />
      <InputField
        type="date"
        lablename="warranty End Date"
        name="warranty_Start_Date"
      />


    </form>
  );
};

ProductWarrantyDerailsForm.propTypes = {
  handeleNextFormerendering: PropTypes.func.isRequired,
};
export default ProductWarrantyDerailsForm;
