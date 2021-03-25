import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
// import OrderHistoryScreen from './screens/OrderHistoryScreen';
// import OrderScreen from './screens/OrderScreen';
// import PaymentMethodScreen from './screens/PaymentMethodScreen';
// import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
// import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import SellerScreen from './screens/SellerScreen';
import SearchBox from './components/SearchBox';
import SearchScreen from './screens/SearchScreen';
import MapScreen from './screens/MapScreen';
import NewsScreen from './screens/NewsScreen';
import NewsScreen1 from './screens/NewsScreen1';
import NewsScreen2 from './screens/NewsScreen2';
import NewsScreen3 from './screens/NewsScreen3';
import SolutionScreen from './screens/SolutionScreen';
import NewsProduct from './screens/NewsProduct';


function App() {
  const categories1 = ["THIẾT BỊ NGÀNH GIẤY",
    "THIẾT BỊ NGÀNH BAO BÌ GIẤY",
    "THIẾT BỊ NGÀNH BAO BÌ NHỰA",
    "THIẾT BỊ NGÀNH CAO SU - NHỰA",
    "THIẾT BỊ THỬ NGHIỆM THÉP",
    "THIẾT BỊ NGÀNH SƠN - XI MẠ",
    "THIẾT BỊ NGÀNH VẬT LIỆU XÂY DỰNG",
    "THIẾT BỊ NGÀNH THỰC PHẨM",
    "THIẾT BỊ NGÀNH DƯỢC PHẨM",
    "THIẾT BỊ NGÀNH Y TẾ - SINH HỌC",
    "THIẾT BỊ NGÀNH NƯỚC VÀ MÔI TRƯỜNG",
    "THIẾT BỊ ĐO ONLINE (KHÍ THẢI - NƯỚC THẢI - NƯỚC CẤP)",
    "HỆ THỐNG QUAN TRẮC NƯỚC THẢI - KHÍ THẢI TỰ ĐỘNG",
    "THIẾT BỊ CƠ BẢN PHÒNG THÍ NGHIỆM"];
    
  const cart = useSelector((state) => state.cart);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };


   const productCategoryList = useSelector((state) => state.productCategoryList);
  

  function dropdownmenu() {
      document.getElementById("myDropdown").classList.toggle("show");
    }

     
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdownmenu-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
        }
    }
  return (
    <BrowserRouter>
      <div className="grid-container">      
        <header className="navbar">
        <div className="upper-nav">
            <div className="hotline">Hotline: 0988 816 815 </div>
            <Link  to="mailto:sales@thanhtin-tech.com">
              Email: sales@thanhtin-tech.com
            </Link>
            <div className="lang">
              <button>
                <img src="./images/vnese.png" alt="vietnamese" />
              </button>
              <button>
                <img src="./images/usa.png" alt="english" />
              </button>
              <div className="lang-cur">VN</div>
            </div>
          </div>
          <div>
            <Link className="brand" to="/">
              <img src="./images/logo.png" alt="Công-ty-TNHH-Thành-Tín" />
            </Link>
          </div>
          <div className="search-bar">
            <Route
              render={({ history }) => (
                <SearchBox history={history}></SearchBox>
              )}
            ></Route>
          </div>
          <div>
            <Link to="/cart">
              <i className="fas fa-shopping-basket"></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Đăng xuất
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Đăng nhập</Link>
            )}
            {userInfo && userInfo.isSeller && (
              <div className="dropdown">
                <Link to="#admin">
                  Seller <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/productlist/seller">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist/seller">Orders</Link>
                  </li>
                </ul>
              </div>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header> 
        <main>
          <div className="dropdownmenu">
            <button onClick={dropdownmenu} className="dropbtn">
              <i className="fas fa-bars"></i>Danh mục sản phẩm
            </button>
            <div id="myDropdown" className="dropdownmenu-content">
              <div className="dropdown-large row">
                <div className="row">
                {categories1.map(category => (
                    <li key={category}>
                      <Link
                        to={`/search/category/${category}`}
                        onClick={() => setSidebarIsOpen(false)}
                      >
                        {category}
                      </Link>
                    </li>
                  ))
                }              
                </div>               
              </div>
            </div>
          </div>
          <Route path="/nproduct" component={NewsProduct}></Route>
          <Route path="/solution" component={SolutionScreen}></Route>
          <Route path="/news" component={NewsScreen}></Route>
          <Route path="/news1" component={NewsScreen1}></Route>
          <Route path="/news2" component={NewsScreen2}></Route>
          <Route path="/news3" component={NewsScreen3}></Route>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          {/* <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route> */}
          {/* <Route path="/order/:id" component={OrderScreen}></Route> */}
          {/* <Route path="/orderhistory" component={OrderHistoryScreen}></Route> */}
          <Route
            path="/search/name/:name?"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
          ></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <PrivateRoute path="/map" component={MapScreen}></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          {/* <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
          ></AdminRoute> */}
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
          <SellerRoute
            path="/productlist/seller"
            component={ProductListScreen}
          ></SellerRoute>
          {/* <SellerRoute
            path="/orderlist/seller"
            component={OrderListScreen}
          ></SellerRoute> */}
          <Route path="/" component={HomeScreen} exact></Route>
          <div className="collect-email">
            <p>Đăng ký email để nhận tin sản phẩm mới nhất</p>
            <form id="form"  method="GET" action="https://script.google.com/macros/s/AKfycbyTSr30R7jPcxOqEYFOuxNOjvKeKWCmBqN2tnnRYTrXPnOElveM/exec">
              <input id="email" type="email" name="email_user" />
              <button type="submit" id="submit-form" placeholder="Email">Gửi</button>
            </form>
          </div>
          <div className="logo-marquee">            
              <img
                src="./images/alp.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/consort.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/emco.png"
                width="120"
                height="80"
                alt="Natural"
              />
             
              <img
                src="./images/kruss.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/nabertherm.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/gfl.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/pta.png"
                width="120"
                height="80"
                alt="Natural"
              />
              <img
                src="./images/pnshar.png"
                width="120"
                height="80"
                alt="Natural"
              />        
          </div>
        </main>
        <div className="footer">
                  <div className="contact-info footer-child">
                    <h4 className="footer-title">thông tin liên hệ</h4>
                    <h5>công ty tnhh thiết bị và hóa chất thành tín</h5>
                    <div className="vphcm ">
                      <strong>VP HCM:</strong><span> 78 Đường số 1A, Khu Phố 4, P.Bình Hưng Hòa B, Quận Bình Tân, Tp.HCM</span>
                      <p><strong>Điện thoại:</strong> <span> (028) 36 360 901 </span></p><p><strong>Fax:</strong> <span>(028) 36 360 902</span></p>
                    </div>
                    <div className="vphn">
                      <strong>VP Hà Nội: </strong><span>Lô 3, khu A1-A2-A3, Đường Cầu Thanh Trì, P.Cự Khối, Quận Long Biên, Hà Nội</span>
                      <p><strong>MST: </strong><span>0311941553 -001</span></p><p><strong>Email: </strong><span>hanoi@thanhtin-tech.com</span></p>
                    </div>
                  </div>
                  <div className="sale-dept footer-child">
                    <h4 className="footer-title">phòng kinh doanh </h4>
                    <p><strong>HCM: </strong><span>sales@thanhtin-tech.com </span></p>
                    <p><strong>Hà Nội: </strong><span>hanoi@thanhtin-tech.com </span></p>
                  </div>
                  <div className="tech-dept footer-child">
                    <h4 className="footer-title">phòng kỹ thuật</h4>
                    <p><strong>HCM: </strong><span>service@thanhtin-tech.com </span></p>
                    <p><strong>Hà Nội: </strong><span>service@thanhtin-tech.com </span></p>
                  </div>
                  <div className="contact-media footer-child">
                <div className="fb-page" data-href="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147" data-tabs="timeline" data-width="300" data-height="200" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147">Công ty TNHH Thiết Bị Và Hoá Chất  Thành Tín</a></blockquote></div>
                <div className="other-social">
                  <Link to="#"><i className="fab fa-linkedin"></i></Link>
                  <Link to="#"><i className="fab fa-twitter"></i></Link>
                  <Link to="#"><i className="fab fa-youtube"></i></Link>
                  <Link to="#"><i className="fab fa-pinterest"></i></Link>
                </div>
              </div>
              <div className="copyright">
            <div>COPYRIGHT &copy; 2021 CÔNG TY TNHH THIẾT BỊ VÀ HÓA CHẤT THÀNH TÍN</div>
          </div>  
          </div>
           
      </div>
    </BrowserRouter>
  );
}

export default App;
