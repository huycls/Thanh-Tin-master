import React, { Fragment, useEffect, useState } from 'react';
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
// import MapScreen from './screens/MapScreen';
import NewsScreen from './screens/NewsScreen';
import NewsScreen1 from './screens/NewsScreen1';
import NewsScreen2 from './screens/NewsScreen2';
import NewsScreen3 from './screens/NewsScreen3';
import SolutionScreen from './screens/SolutionScreen';
import NewsProduct from './screens/NewsProduct';
import IntroScreen from './screens/IntroScreen';
import Allnews from './screens/AllNews';
import ScrollToTop from './components/ScrollToTop';
import { listProductCategories } from './actions/productActions';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
// import SubSearchScreen from './screens/SubSearchScreen';


function App() {
  // const categories1 = ["Lò nung", "Máy ly tâm", "Máy đo", "Máy hấp tiệt trùng", "Các loại tủ đựng", "Tủ sấy"];
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
  const {
    loading: loadingCategories,
    error: errorCategories,
    categories,
  } = productCategoryList;
  useEffect(() => {
    dispatch(listProductCategories());
  }, [dispatch]);
  function dropdownmenu() {
      document.getElementById("myDropdown").classList.toggle("show");
    }
  function dropdownresmenu(){
    document.getElementById('dropdown-responsivemenu').classList.toggle("show");
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
    
    function dropSearchbar(){
      document.getElementById("search-bar").classList.toggle("show");
    }
    
    function scrollToTop(){
      var toTop = document.getElementById("navbar");
      toTop.scrollIntoView();
    }

    window.onload = function(){
      let scrolltotop = document.getElementById('scrolltotop');
      window.onscroll = function() {scrollFunction()};
      function scrollFunction() {
        if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
          scrolltotop.style.display = "block";
        } else {
          scrolltotop.style.display = "none";
        }
      }
    }
    function removeVietnameseTones(str) {
      str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
      str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
      str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
      str = str.replace(/đ/g,"d");
      str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
      str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
      str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
      str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
      str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
      str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
      str = str.replace(/Đ/g, "D");
      // Some system encode vietnamese combining accent as individual utf-8 characters
      // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
      str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
      str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
      // Remove extra spaces
      // Bỏ các khoảng trắng liền nhau
      str = str.replace(/ + /g," ");
      str = str.trim();
      // Remove punctuations
      // Bỏ dấu câu, kí tự đặc biệt
      str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
      return str;
    }
  return (
    <BrowserRouter>
      <div className="grid-container"> 
      <div className="upper-nav">
            <div className="hotline">Hotline: <a href="tel:0988 816 815">0988 816 815</a> </div>
            <div>
              Email:<a  href="mailto:sales@thanhtin-tech.com">sales@thanhtin-tech.com</a>
            </div>
            <div className="lang">
              <button>
                <img src="./images/vnese.png" alt="vietnamese" />
              </button>
              <button>
                <img src="./images/usa.png" alt="english" />
              </button>
            </div>
          </div>
        <button id="scrolltotop" onClick={scrollToTop}><i className="fas fa-chevron-up"></i></button>
        <header className="navbar" id="navbar">      
          <div className="lower-nav">
            <div>
              <Link className="brand" to="/">
                <img src="./images/logo.png" alt="Công-ty-TNHH-Thành-Tín" />
              </Link>
            </div>         
            <div className="search-bar" id="search-bar"> 
              <Route
                render={({ history }) => (
                  <SearchBox history={history}></SearchBox>
                )}
              ></Route>
            </div>
            <div className="icon-container">
              <button className="small-searchbar" onClick={dropSearchbar}><i className="fa fa-search"></i></button>            
              <Link to="/gio-hang">
                <i className="fas fa-shopping-basket"></i>
                {cartItems.length > 0 && (
                  <span className="badge">{cartItems.length}</span>
                )}
              </Link>
            </div>
            <button className="menu-responsive" onClick={dropdownresmenu}>
              Menu  <i className="fas fa-ellipsis-v menu-icon"></i>
            </button>
            <div className="menu-container"  id="dropdown-responsivemenu">            
              <Link to="/gioi-thieu">Giới thiệu</Link>
              {userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                  </Link>
                  <ul className="dropdown-content dropdown-nav">
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
                <Link to="/dang-nhap">Đăng nhập</Link>
              )}
              {userInfo && userInfo.isSeller && (
                <div className="dropdown">
                  <Link to="#admin">
                    Seller <i className="fa fa-caret-down"></i>
                  </Link>
                  <ul className="dropdown-content dropdown-nav">
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
                  <ul className="dropdown-content dropdown-nav">
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
          </div>
        </header> 
        <main>
            {/* <button onClick={dropdownmenu} className="dropbtn">
              <i className="fas fa-bars"></i>Danh mục sản phẩm
            </button> */}
            {/* <div id="myDropdown" className="dropdownmenu-content">
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
            </div> */}
            <button onClick={dropdownmenu} className="dropbtn">
              <i className="fas fa-bars"></i>Danh mục sản phẩm
            </button>
            <div id="myDropdown" className="dropdownmenu-content">
            <ul>
            {loadingCategories ? (
              <LoadingBox></LoadingBox>
            ) : errorCategories ? (
              <MessageBox variant="danger">{errorCategories}</MessageBox>
            ) : (
              categories.map(category => (          
                <li key={category}>
                    <Link
                      to={`/search/category/${category}`}
                      onClick={() => setSidebarIsOpen(false)}
                    >
                      {category.toUpperCase()} 
                    </Link>
                  </li>              
              ))
            )}
              </ul>
            </div>
          <Route path="/tat-ca-tin-tuc" component={Allnews}></Route>
          <Route path="/gioi-thieu" component={IntroScreen}></Route>
          <Route path="/tin-san-pham-moi" component={NewsProduct}></Route>
          <Route path="/giai-phap" component={SolutionScreen}></Route>
          <Route path="/cong-ty-thanh-tin-la-nha-phan-phoi-chinh-thuc-cho-hang-mettler-toledo" component={NewsScreen}></Route>
          <Route path="/thong-bao-thay-doi-ten-giao-dich" component={NewsScreen1}></Route>
          <Route path="/analytica-viet-nam-2013" component={NewsScreen2}></Route>
          <Route path="/tuyen-nhan-vien-kinh-doanh" component={NewsScreen3}></Route>
          <Route path="/seller/:id" component={SellerScreen}></Route>
          <Route path="/gio-hang/:id?" component={CartScreen}></Route>
          <Fragment>
            <ScrollToTop />
            <Route path="/san-pham/:id" component={ProductScreen}></Route>
            {/*exact path*/}
          </Fragment>
          <Route
            path="/san-pham/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/dang-nhap" component={SigninScreen}></Route>
          <Route path="/dang-ky-tai-khoan" component={RegisterScreen}></Route>
          <Route path="/yeu-cau-bao-gia" component={ShippingAddressScreen}></Route>
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
          {/* <Route
            path="/search/category/:subcategory"
            component={SearchScreen}
            exact>
          </Route>  */}
          <Route
            path="/search/category/:category/brand/:brand"
            component={SearchScreen}
            exact
          ></Route>
          <Route
            path="/search/category/:category/brand/:brand/name/:name"
            component={SearchScreen}
            exact
          ></Route>
          {/* <Route
            path="/search/category/:category/name/:name"
            component={SearchScreen}
            exact
          ></Route> */}
          <Fragment>
            <ScrollToTop />
            <Route
            path="/search/category/:category/brand/:brand/name/:name/pageNumber/:pageNumber"
            component={SearchScreen}
            exact
            ></Route>
          </Fragment>        
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          {/* <PrivateRoute path="/map" component={MapScreen}></PrivateRoute> */}
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <Fragment>
            
            <AdminRoute
            path="/productlist/pageNumber/:pageNumber"
            component={ProductListScreen}
            exact
          ></AdminRoute>
          <ScrollToTop />
          </Fragment>         
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
          <div className="marquee">
            <div className="marquee--inner">
              <span>          
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
              </span>
            </div>       
          </div>
        </main>
        <div className="footer">
              <div className="contact-info footer-child">
                <h4 className="footer-title">thông tin liên hệ</h4>
                <h3>công ty tnhh thiết bị và hóa chất thành tín</h3>
                <h4><i className="fas fa-chevron-right"></i><Link to="/intro">Giới thiệu công ty</Link></h4>
                <div className="vphcm ">
                  <strong>VP HCM:</strong><span> 78 Đường số 1A, Khu Phố 4, P.Bình Hưng Hòa B, Quận Bình Tân, Tp.HCM</span>
                  <p><strong>Điện thoại:</strong> <span> (028) 36 360 901 </span></p><p><strong>Fax:</strong> <span>(028) 36 360 902</span></p>
                </div>
                <div className="vphn">
                  <strong>VP Hà Nội: </strong><span>Lô 3, khu A1-A2-A3, Đường Cầu Thanh Trì, P.Cự Khối, Quận Long Biên, Hà Nội</span>
                  <p><strong>MST: </strong><span>0311941553 -001</span></p><p><strong>Email: </strong><span><a href="mailto:hanoi@thanhtin-tech.com">hanoi@thanhtin-tech.com</a></span></p>
                </div>
              </div>
              <div className=" footer-child">
                <div className="sale-dept">
                  <h4 className="footer-title">phòng kinh doanh </h4>
                  <p><strong>HCM: </strong><span><a href="mailto:sales@thanhtin-tech.com">sales@thanhtin-tech.com</a> </span></p>
                  <p><strong>Hà Nội: </strong><span><a href="mailto:hanoi@thanhtin-tech.com">hanoi@thanhtin-tech.com</a> </span></p>
                </div>
                
              </div>             
              <div className="footer-child ">             
                {/* <img src="https://www.freevisitorcounters.com/en/counter/render/812336/t/0" border="0" className="counterimg" /> */}
                <div className="tech-dept ">
                  <h4 className="footer-title">phòng kỹ thuật</h4>
                  <p><strong>HCM: </strong><span><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a> </span></p>
                  <p><strong>Hà Nội: </strong><span><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a> </span></p>
                </div>
              </div>
              <div className="contact-media footer-child">
                <div className="fb-page" data-href="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147" data-tabs="timeline" data-width="300" data-height="200" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/C%C3%B4ng-ty-TNHH-Thi%E1%BA%BFt-B%E1%BB%8B-V%C3%A0-Ho%C3%A1-Ch%E1%BA%A5t-Th%C3%A0nh-T%C3%ADn-582804005098147">Công ty TNHH Thiết Bị Và Hoá Chất  Thành Tín</a></blockquote></div>
                <div className="other-social">
                  <a href="https://www.linkedin.com/in/thanh-tin-tech-co-ltd-43979a205/" target="_blank"><i className="fab fa-linkedin"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="https://www.youtube.com/channel/UCWvi8FoZbVU-PMQHDsYC5pQ" target="_blank"><i className="fab fa-youtube"></i></a>
                  
                </div>
              </div>
              <a className="counter-footer" href="http://besucherzaehler.co/stats/8hlj">
                <svg width="100" height="90" id="besucherzaehler2"><g><rect width="100" height="70" x="0" y="0"  fillOpacity="0.0" stroke="#ffffff"></rect><text x="6" y="38"  fontFamily="Roboto, sans-serif" fontSize="11" fill="#ffffff">Total: 1</text><text x="6" y="50"  fontFamily="Roboto, sans-serif" fontSize="11" fill="#ffffff">Today: 1</text><text x="6" y="62" fontFamily="Roboto, sans-serif" fontSize="11" fill="#ffffff">Yesterday: 0</text><rect width="3" height="9" x="6" y="14" ></rect><rect width="3" height="17" x="11" y="6" ></rect><rect width="3" height="13" x="16" y="10" ></rect><text x="25" y="23" fontFamily="Roboto, sans-serif" fontSize="11" fill="#ffffff">Visitor:</text></g></svg>
              </a>
              <div className="copyright">
            <div>COPYRIGHT &copy; 2021 CÔNG TY TNHH THIẾT BỊ VÀ HÓA CHẤT THÀNH TÍN</div>
          </div>  
        </div>  
      </div>
    </BrowserRouter>
    
  );
}

export default App;
