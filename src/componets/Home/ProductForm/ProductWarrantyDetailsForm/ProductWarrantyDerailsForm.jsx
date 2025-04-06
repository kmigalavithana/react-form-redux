import React from 'react';
import InputField from "../../../common/From/InputField.jsx";
import PropTypes from "prop-types";

const ProductWarrantyDerailsForm = ({handelePrevFormerendering }) => {
    return (
        <form className="max-w-sm mx-auto">
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

            <button
                type="submit"
                className="text-white bg-black-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handelePrevFormerendering}
            >

               Back to basic details

            </button>
        </form>
    );
};

ProductWarrantyDerailsForm.propTypes = {
    handeleNextFormerendering: PropTypes.func.isRequired,
}
export default ProductWarrantyDerailsForm;

