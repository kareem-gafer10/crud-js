import { useContext } from "react";
import Table from "./Components/Table";
import Form from "./Components/Form";
import { ProductContext } from "./Context/ProductContext";

const App = () => {
  const { showForm, openForm } = useContext(ProductContext);

  return (
    <div className="table-width my-5 w-75 mx-auto">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="text-primary">Crud Operations</h2>
          <button className="btn btn-primary" onClick={showForm}>
            Add Product
          </button>
        </div>

        <Table />
        {openForm && <Form />}
      </div>
    </div>
  );
};

export default App;
