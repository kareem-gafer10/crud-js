import React, { createContext, useEffect, useState } from "react";
import { deleteData, getData, posData, putData } from "../Api";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
 
  const [products, setProducts] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [edit, setEdit] = useState(false);
  const [allProducts, setAllProducts] = useState({
    name: "",
    price: "",
    category: "",
  });





  

  const getProducts = async () => {
    let { data } = await getData();
    setProducts(data);
  };

  const deleteProducts = async (id) => {
    await deleteData(id);
    getProducts();
  };

  const addProducts = async (product) => {
    let data = {
      name: product.name,
      price: product.price,
      category: product.category,
    };

    if (edit) {
      await putData(product.id, data);
    } else {
      await posData(data);
    }
    getProducts();
    setOpenForm(false);
  };

  const updateProducts = async (data) => {
    setAllProducts(data);
    setOpenForm(true);
    setEdit(true);
  };

  const showForm = () => {
    setOpenForm(true);
    setAllProducts({ name: "", price: "", category: "" });
  };

  const closeForm = () => {
    setOpenForm(false);
  };


  useEffect(() => {
    getProducts();
  }, []);





  return (
    <ProductContext.Provider
      value={{
        products,
        openForm,
        allProducts,
        deleteProducts,
        addProducts,
        updateProducts,
        showForm,
        closeForm,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;





