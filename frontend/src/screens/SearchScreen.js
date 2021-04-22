import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
// import { prices } from '../utils';
// import OrderScreen from './OrderScreen';
import {Helmet} from 'react-helmet';
import {withNamespaces} from 'react-i18next';


export default withNamespaces() (function SearchScreen( props) {
  const {t} = props;
  const {
    name = 'all',
    category = 'all',
    // subcategory = 'all',
    brand = 'all',
    // min = 0,
    // max = 0,
    // order = 'newest',
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const productBrandList = useSelector((state) => state.productBrandList);
   const {
       loading: loadingBrands,
       error: errorBrands,
       brands,
       } = productBrandList;
  
  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        // subcategory: subcategory !== 'all' ? subcategory : '',
        brand: brand !== 'all' ? brand : '',
      })
    );
  }, [  category, brand, dispatch, name, pageNumber]);
                                                                                                  
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category|| category;
    //  const filterSubcategory = filter.category || category;
    const filterBrand = filter.brand || brand;
    const filterName = filter.name || name; 
    return `/search/category/${filterCategory}/brand/${filterBrand}/name/${filterName}/pageNumber/${filterPage}`;
  };
  function dropdownmenu() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  return (
    <div className="search-screen">
      <Helmet>
        <title>{t("search.label")}</title>
      </Helmet>
      <div className="rowe">
      </div>
      <div className="row top">       
        <div className="subcategory">
        <h3>Hãng sản xuất <button className="resdropdown-btn dropbrand" onClick={dropdownmenu}><i className="fa fa-caret-down"></i></button></h3>
            {loadingBrands ? (
              <LoadingBox></LoadingBox>
            ) : errorBrands ? (
              <MessageBox variant="danger">{errorBrands}</MessageBox>
            ) : (
              <ul className="subcategory-container" id="myDropdown3">
                <li>
                  <Link
                    className={'all' === brand ? 'active' : '' }
                    to={getFilterUrl({ brand: 'all' })}
                  >
                    Tất cả
                  </Link>
                </li>
                {brands.map((c) => (
                  <li key={c}>
                    <Link
                      className={c === brand ? 'active' : ''}
                      to={getFilterUrl({ brand: c })}
                    >
                      {c.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase())}
                    </Link>
                  </li>
                ))}
              </ul>
            )}        
        
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="search-result">{products.length} Kết quả tìm kiếm</div>
        )}
        <div className="search-box">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="rowe">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
              <div className="rowe center pagination">
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
})