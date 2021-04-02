import React from 'react';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card product-card">
      <Link className="card-header" to={`/san-pham/${product._id}`}>
        <img className="small" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/san-pham/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <div className="row">
          <div className="product-model">Model: {product.model}</div>
          <div className="product-brand">Hãng sản xuất: {product.brand}</div>
        </div>
        <Link className="details-btn" to={`/san-pham/${product._id}`}>
          Chi tiết
        </Link>
      </div>
    </div>
  );
}
