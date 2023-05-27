import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const Table = () => {
  const  { products,deleteProducts,updateProducts }  = useContext(ProductContext);
  return (
    <table className="table table-dark table-hover text-center my-5">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>
            <button onClick={()=>updateProducts(product)} className="btn btn-sm btn-success m-1">Update</button>
            </td>
            <td><button onClick={()=>deleteProducts(product.id)}className=" btn btn-sm btn-danger m-1">Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
