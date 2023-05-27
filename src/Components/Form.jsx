import React, { useContext, useState } from "react";
import {ProductContext} from "../Context/ProductContext"
import "./Form.css"
const Form = () => {
  const {closeForm,allProducts,addProducts} = useContext(ProductContext);
  
  const [product, setProduct] = useState(allProducts);
  const [error, setError] = useState(false);
  

  const displayProduct = (e)=>{
    e.preventDefault();
    setError(true)
    
    if (!!product.name && !!product.price && !!product.category) {
      addProducts(product)
  }
  }

  const cancelForm=(e)=>{
    e.preventDefault();
    closeForm()
  }

  const changeFormData = (e)=>{
    const {name,value}=e.target;
    setProduct({...product,[name]:value})
  }



  return (
    <div className=" form-overlay">
    
      <form onSubmit={displayProduct}>

        <div className="form-group mb-3">
          <label className=" form-label">Name</label>
          <input
            className="form-control mt-2"
            type="text"
            name="name"
            placeholder="product Name"
            onChange={changeFormData}
            value={product.name}
          />
          {error && product.name==="" && <span className="text-danger">Product Name required</span>}
        </div>

        <div className="form-group mb-3">
          <label className=" form-label">Price</label>
          <input
            className="form-control mt-2"
            type="number"
            name="price"
            placeholder="product price"
           onChange={changeFormData}
           value={product.price}
          />
          {error && product.price==="" && <span className="text-danger">Product Price required</span>}
        </div>

        <div className="form-group">
        <label className=" form-label">Category</label>
          <select className="form-select form-select-sm"  name="category"  onChange={changeFormData} value={product.category}>
            <option value="-1"></option>
            <option value="mobiles">Mobiles</option>
            <option value="laptops">Laptops</option>
            <option value="tv">TV's</option>
          </select>
          {error && product.category==="" && <span className="text-danger">Product Category required</span>}
        </div>

        <button onClick={displayProduct} className="btn btn-primary">Send</button>
        <button onClick={cancelForm} className="btn btn-danger ">Cancel</button>

      </form>
    </div>
  );
};

export default Form;
