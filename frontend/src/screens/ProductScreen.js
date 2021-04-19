import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import {  detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
// import Product from '../components/Product';
import { listProducts } from '../actions/productActions';
import parse from 'html-react-parser';
import {Helmet} from 'react-helmet';
import { withNamespaces } from 'react-i18next';
import {useHistory} from 'react-router-dom';

// import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default withNamespaces((props) => props.namespaces) (function ProductScreen(props) {
  const {t} = props;
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  // const productList = useSelector((state) => state.productList);
  // const { products } = productList;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    
    success: successReviewCreate,
  } = productReviewCreate;

  useEffect(() => { 
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);
  const addToCartHandler = () => {
    props.history.push(`/gio-hang/${productId}?qty=${qty}`);
  };
  
  useEffect(() => {
    dispatch(listProducts({}));
   }, [dispatch]);
   
    const zoomImage = () =>{
      document.getElementById("myModal").style.display = "block";
      document.getElementById("img01").src = product.image;
      document.getElementById("caption").innerHTML = product.name;
    }
  
    // When the user clicks on <span> (x), close the modal
    const closeSpan = () => { 
      document.getElementById("myModal").style.display = "none";
    }
    // const history = useHistory();
    // useEffect(()=>{
    //   history.replace(`/${product.name}`);
    // }, [])
  const history = useHistory();
  return (
    <div>  
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        
        <div>
        <Helmet>
        <title>{product.name}</title>
        </Helmet>
          <button className="goback btn btn-outline-primary"  onClick={() => history.goBack()}><i className="fas fa-arrow-left"></i> {t("back.label")}</button>
          <div className="rowe top detail-page">
            <div className="col-1 col image-product">
              <img
                id="pic"
                src={product.image}
                alt={product.name}
                onClick = {zoomImage}
              ></img>
              <div id="myModal" className="modal">
                <span className="close" onClick={closeSpan}>&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
              </div>
              <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
              </div>
            </div>
            <div className="col-1 col detail-product">
              <ul>
                <li>
                  <h1>{t("productname", {product})}</h1>
                </li>              
                <li><strong>{t("price.label")} </strong> {product.price} &#8363;</li>
                <li> 
                  <p><strong>Model:</strong> {product.model}</p>
                </li>
                <li> 
                  <p className="description"><strong>{t("description.label")}</strong> {t("key", {product})}</p>
                </li>
                <li>
                  <p className="contact-sale"> <strong> {t("emailus.label")} <a href="mailto:sales@thanhtin-tech.com">sales@thanhtin-tech.com</a></strong></p>
                </li>
              </ul>
            </div>
            <div className="col col-05 center">
              <div className="card productcard-body productscreen-card">
                <ul>              
                  <li>
                    <div className="row">
                      <div className="card-child">{t("price.label")}</div>
                      <div className="price card-child">{product.price} &#8363;</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="card-child">{t("status.label")}</div>
                      <div className=" card-child">
                        {product.countInStock > 0 ? (
                          <span className="success">{t("instock")}</span>
                        ) : (
                          <span className="danger">{t("outofstock")}</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div className="card-child">{t("qty.label")}</div>
                          <div className="card-child">
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
                          {t("tocart.label")}
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="lower-detailpage">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-parameter-tab" data-bs-toggle="pill" data-bs-target="#pills-parameter" type="button" role="tab" aria-controls="pills-parameter" aria-selected="true">{t("parameter.label")}</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-video-tab" data-bs-toggle="pill" data-bs-target="#pills-video" type="button" role="tab" aria-controls="pills-video" aria-selected="false">Video</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-characteristic-tab" data-bs-toggle="pill" data-bs-target="#pills-characteristic" type="button" role="tab" aria-controls="pills-characteristic" aria-selected="false">{t("feature.label")}</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-application-tab" data-bs-toggle="pill" data-bs-target="#pills-application" type="button" role="tab" aria-controls="pills-application" aria-selected="false">{t("apply.label")}</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-accessories-tab" data-bs-toggle="pill" data-bs-target="#pills-accessories" type="button" role="tab" aria-controls="pills-accessories" aria-selected="false">{t("access.label")}</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-download-tab" data-bs-toggle="pill" data-bs-target="#pills-download" type="button" role="tab" aria-controls="pills-download" aria-selected="false">Download</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-parameter" role="tabpanel" aria-labelledby="pills-parameter-tab">
                {parse(t("parameter.content", {product}))}
              </div>
              <div className="tab-pane fade" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab"><a href="#" download>Link</a></div>
              <div className="tab-pane fade" id="pills-characteristic" role="tabpanel" aria-labelledby="pills-characteristic-tab">...</div>
              <div className="tab-pane fade" id="pills-application" role="tabpanel" aria-labelledby="pills-application-tab">...</div>
              <div className="tab-pane fade" id="pills-accessories" role="tabpanel" aria-labelledby="pills-accessories-tab">...</div>
              <div className="tab-pane fade" id="pills-download" role="tabpanel" aria-labelledby="pills-download-tab"><a href="#" download>Download</a></div>
            </div>
          </div>
          <div className="recommend-product">
                     
          </div>                        
        </div>
      )}
     
    </div>
  );
})
