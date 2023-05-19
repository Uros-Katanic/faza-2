// import React, { useState, useEffect } from 'react';
// import './App.css';

// const ProductsContext = React.createContext();

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.log(error));
//   }, []);

//   const handleDelete = (id) => {
//     const updatedProducts = products.filter(product => product.id !== id);
//     setProducts(updatedProducts);
//   };

//   return (
//     <div className="App">
//       <ProductsContext.Provider value={{ products, handleDelete }}>
//         <ProductList />
//       </ProductsContext.Provider>
//     </div>
//   );
// }

// function ProductList() {
//   const { products, handleDelete } = React.useContext(ProductsContext);

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map(product => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>Price: {product.price}</p>
//           <p>Description: {product.description}</p>
//           <button onClick={() => handleDelete(product.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;