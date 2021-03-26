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
    <div>
      <div className="upper-content">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
              <img src="./images/3.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="./images/4.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="./images/thiet-bi-ptn.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div className="news">
          <div className="news-title"><i className="fas fa-chevron-right"></i> <Link to="/intro">Giới thiệu</Link></div>
          <div className="news-content">
            <strong><i className="fas fa-chevron-right"></i>CÔNG TY TNHH THIẾT BỊ VÀ HÓA CHẤT THÀNH TÍN</strong> hoạt động trong lĩnh vực tư vấn, cung cấp các giải pháp, thiết bị phòng thí nghiệm, thiết bị công nghiệp, hóa chất, vật tư...
          </div>
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
      </div>
      <div className="lower-content">
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
                {products.filter(item => item.name).map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="sidebar">
            <div className="sidebar-title">
              <Link to="/solution">Giải pháp công nghệ tự động</Link>
            </div>
            <div className="sidebar-content">
              <Link to="/solution" className="content-img">
                <img
                  src="./images/sidebar-img.png"
                  alt="giai-phap-cong-nghe-tu-dong"
                />
                <div className="caption">
                  <h5> Lorem ipsum dolor sit amet.</h5>
                  <p>15-1-2020, 4:51 pm</p>
                </div>
              </Link>
            </div>
            <div className="sub-content">
              <Link to="/nproduct">
                <img
                  src="./images/thumb_DM4A300.jpg"
                  alt="thiet-bi-phong-thi-nghiem"
                />
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Maecenas eu nulla malesuada,
                  vehicula eros ac
                </span>
              </Link>
            </div>
            <div className="sub-content">
              <Link to="/nproduct">
                <img
                  src="./images/thumb_DM4A300.jpg"
                  alt="thiet-bi-phong-thi-nghiem"
                />
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Maecenas eu nulla malesuada,
                  vehicula eros ac
                </span>
              </Link>
            </div>
           
        </div>
      </div>  
    </div>
  );
}
