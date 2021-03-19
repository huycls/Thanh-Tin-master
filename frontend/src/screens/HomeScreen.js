import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(listProducts({}));
    dispatch(listTopSellers());
  }, [dispatch]);
  return (
    <div>
      <div className="upper-content">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/giaiphap-slide.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img src="./images/3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./images/4.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="news">
          <div className="news-title">Tin mới</div>
          <div className="news-content">
            <Link to="/news">
              <p>
                <i className="fas fa-chevron-right"></i>Công ty Thành Tín là nhà phân
                phối chính thức cho dòng cân HE/TLE/HE của hãng METTLER TOLEDO (Thụy
                Sỹ)
              </p>
            </Link>
            <Link to="#">
              <p>
                <i className="fas fa-chevron-right"></i>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </Link>
            <Link to="#">
              <p>
                <i className="fas fa-chevron-right"></i>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </Link>
            <Link to="#">
              <p>
                <i className="fas fa-chevron-right"></i>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </Link>
            <Link to="#">
              <p>
                <i className="fas fa-chevron-right"></i>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="lower-content">
        <div className="product-">
          <h2>Tất cả sản phẩm</h2>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>
              {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>  
    </div>
  );
}
