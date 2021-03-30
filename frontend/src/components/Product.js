import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card product-card">
      <Link className="card-header" to={`/product/${product._id}`}>
        <img className="small" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className="row">
          <div className="product-model">Model: {product.description}</div>
          <div className="product-brand">Hãng sản xuất: {product.brand}</div>
        </div>
        <Link className="details-btn" to={`/product/${product._id}`}>
          Chi tiết
        </Link>
      </div>
    </div>
  );
}
