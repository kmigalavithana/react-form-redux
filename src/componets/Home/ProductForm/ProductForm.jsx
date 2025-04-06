import ProductBasicDetaislForm from "./ProductBasicdetaislForm/ProductBasicDetaislForm.jsx";
import ProductWarrantyDerailsForm from "./ProductWarrantyDetailsForm/ProductWarrantyDerailsForm.jsx";
import {useState} from "react";

const ProductForm = () => {

  const [curruntForm, setCurruntForm] = useState(1)

  const handeleNextFormerendering = () => {
    setCurruntForm((prevState) => prevState + 1)
  }

  const handelePrevFormerendering = () => {
    setCurruntForm((prevState) => prevState - 1)
  }

  const productformMapper = {
    1:<ProductBasicDetaislForm  handeleNextFormerendering = {handeleNextFormerendering}/>,
    2:<ProductWarrantyDerailsForm handelePrevFormerendering={handelePrevFormerendering}/>
  }


const renderProductForm = () => {
    return productformMapper[curruntForm];
}


  return (
    <div className="mt-9">
      {renderProductForm()}
    </div>

  );
};

export default ProductForm;
