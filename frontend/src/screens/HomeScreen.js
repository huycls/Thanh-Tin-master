import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Carousel } from 'react-responsive-carousel';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
// import { listTopSellers } from '../actions/userActions';
import { Link } from 'react-router-dom';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  // const userTopSellersList = useSelector((state) => state.userTopSellersList);
  // const {
  //   loading: loadingSellers,
  //   error: errorSellers,
  //   users: sellers,
  // } = userTopSellersList;

   useEffect(() => {
    dispatch(listProducts({}));
    // dispatch(listTopSellers());
   }, [dispatch]);
  return (
    <div className="rowe">
      <div className="upper-content">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img src="./images/3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src="./images/4.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="./images/thiet-bi-ptn.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="product-box">      
          <h1 className="product-banner">Tất cả sản phẩm</h1>
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <div>
              {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
              <div className="rowe">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="sidebar">
      <div className="news">
          
          <div className="news-title"><i className="fas fa-chevron-right"></i> <Link to="/allnews">Tin mới</Link></div>
          <div className="news-content">
            <Link to="/news">
              <p>
                <i className="fas fa-chevron-right"></i>Công ty Thành Tín là nhà phân
                phối chính thức cho dòng cân HE/TLE/HE của hãng METTLER TOLEDO (Thụy
                Sỹ)
              </p>
            </Link>
            <Link to="news1">
              <p>
                <i className="fas fa-chevron-right"></i>Thông báo thay đổi tên giao dịch
              </p>
            </Link>
            <Link to="news2">
              <p>
                <i className="fas fa-chevron-right"></i>ANALYTICA VIETNAM 2013 TRIỂN LÃM QUỐC TẾ LẦN THỨ 3 VỀ CÔNG NGHỆ THÍ NGHIỆM, PHÂN TÍCH, CÔNG NGHỆ SINH HỌC VÀ CHẨN ĐOÁN
              </p>
            </Link>
            <Link to="news3">
              <p>
                <i className="fas fa-chevron-right"></i>Tuyển nhân viên kinh doanh
              </p>
            </Link>        
          </div>
        </div>
        <div className="sidebar-title">
          <a href="https://www.youtube.com/channel/UCWvi8FoZbVU-PMQHDsYC5pQ/featured">Kênh Video - Video mới nhất</a>
        </div>
        <div className="sidebar-content">
          <iframe src="https://www.youtube.com/embed/xjndBrxqtzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
   
      </div>
    </div>
  );
}
