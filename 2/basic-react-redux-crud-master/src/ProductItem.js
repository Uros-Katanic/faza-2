import React from 'react';

const ProductItem = ({ product }) => {
  // Funkcija za brisanje proizvoda
  const deleteProduct = id => {
    // Ovdje bi se obično koristila fetch metoda za slanje zahtjeva za brisanje proizvoda
    console.log(`Deleting product with ID: ${id}`);
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.name} />
      
      <button onClick={() => deleteProduct(product.id)}>Delete</button>
    </div>
  );
};

export default ProductItem;

