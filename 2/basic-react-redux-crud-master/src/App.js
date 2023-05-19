// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchProducts,
//   updateProduct,
//   deleteProduct,
// } from './features';
// import { createProduct } from './features/Action';
// const App = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products);

//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, [dispatch]);

//   const handleUpdate = (id, updatedProduct) => {
//     dispatch(updateProduct(id, updatedProduct));
//   };

//   const handleDelete = (id) => {
//     dispatch(deleteProduct(id));
//   };

//   const handleCreate = (newProduct) => {
//     dispatch(createProduct(newProduct));
//   };

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - {product.price}
//             <button onClick={() => handleUpdate(product.id, updatedProduct)}>
//               Update
//             </button>
//             <button onClick={() => handleDelete(product.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Create Product</h2>
//       <form onSubmit={handleCreate}>
//         <input type="text" name="name" placeholder="Name" />
//         <input type="number" name="price" placeholder="Price" />
//         <button type="submit">Create</button>
//       </form>
//     </div>
//   );
// };

// export default App;
// App.js
import React, { useContext } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ProductItem from './ProductItem';

const App = () => {
  const items = []; // Inicijalno stanje proizvoda

  // Renderovanje proizvoda
  const renderProducts = () => {
    if (items.length === 0) {
      return <div>No products found.</div>;
    }

    return items.map(product => (
      <ProductItem key={product.id} product={product} />
    ));
  };

  return (
    <Router>
      <Link to="/product/add">Add Product</Link>
      
      <Switch>

        <Route path="/" element={renderProducts()} />
        
        <Route path="/product/:id">
          {/* Prikaz pojedinačnog proizvoda */}
        </Route>
        
        <Route path="/product/edit/:id">
          {/* Forma za editovanje podataka o proizvodu */}
        </Route>
        
        <Route path="/product/add">
          {/* Forma za dodavanje novog proizvoda */}
        </Route>
        </Switch>

    </Router>
  );
};

export default App;
