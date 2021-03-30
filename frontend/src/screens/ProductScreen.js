import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
// import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import { CKEditor} from '@ckeditor/ckeditor5-react';
// import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    
    success: successReviewCreate,
  } = productReviewCreate;

  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState('');

  useEffect(() => {
    // if (successReviewCreate) {
    //   window.alert('Review Submitted Successfully');
    //   setRating('');
    //   setComment('');
    //   dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    // }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (comment && rating) {
  //     dispatch(
  //       createReview(productId, { rating, comment, name: userInfo.name })
  //     );
  //   } else {
  //     alert('Please enter comment and rating');
  //   }
  // };
  useEffect(() => {
    dispatch(listProducts({}));
    // dispatch(listTopSellers());
   }, [dispatch]);

   
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Trở lại</Link>
          <div className="rowe top detail-page">
            <div className="col-1 col image-product">
              <img
                id="pic"
                src={product.image}
                alt={product.name}
              ></img>
              <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
              </div>
            </div>
            <div className="col-1 col detail-product">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>              
                <li>Giá : {product.price} VNĐ</li>
                <li>
                  
                  <p>Model: {product.description}</p>
                </li>
                <li>
                  <p className="contact-sale">Liên hệ <strong>Email: sales@thanhtin-tech.com</strong></p>
                </li>
              </ul>
            </div>
            <div className="col-1 col">
              <div className="card productcard-body productscreen-card">
                <ul>              
                  <li>
                    <div className="row">
                      <div>Giá</div>
                      <div className="price">{product.price} VNĐ</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Trạng thái</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">Còn hàng</span>
                        ) : (
                          <span className="danger">Hết hàng</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Số lượng</div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Thêm vào giỏ hàng
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Thông số kỹ thuật</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Video</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Download catalog</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              {product.parameter}
            </div>
            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Link to="#">Link</Link></div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><a href="./images/sidebar-img.jpg" download>Download</a></div>
          </div>
          </div>
           
        </div>
      )}
     
    </div>
  );
}
