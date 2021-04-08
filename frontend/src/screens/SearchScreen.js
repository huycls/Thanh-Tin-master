import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
// import { prices } from '../utils';
// import OrderScreen from './OrderScreen';

export default function SearchScreen(props) {
 
  const applies = [
    "Giấy carton"
  ];
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
  // const {brands}  = productBrandList;

  // const accentName () => {
  //   return name.normalize('NFD')
  //             .replace(/[\u0300-\u036f]/g, '')
  //             .replace(/đ/g, 'd').replace(/Đ/g, 'D');
  // }
   const {
       loading: loadingBrands,
       error: errorBrands
       } = productBrandList;
  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        // subcategory: subcategory !== 'all' ? subcategory : '',
        brand: brand !== 'all' ? brand : '',
        // min,
        // max,
        // order, category == category ? category == subcategory : ''
      })
    );
  }, [category, brand, dispatch, name, pageNumber]);
  
  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    // const filterSubcategory = filter.subcategory || subcategory;
    const filterBrand = filter.brand || brand;
    const filterName = filter.name || name;
    // const sortOrder = filter.order || order;
    // const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    // const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/brand/${filterBrand}/name/${filterName}/pageNumber/${filterPage}`;
  };
    const brands = [
      'ALP - JAPAN',
      'EMCO - GERMANY',
      'CONSORT',
      'DOSER - GERMANY',
      'PNSHAR - CHINA',
      'KRUSS - GERMANY',
      'PTA - EUROPE',
      'COMETECH - TAIWAN',
      'NABERTHERM - GERMANY',
      'TILO',
      'IDM TEST - SPAIN',
      'HAMILTON - ENGLAND',
      'NOVAPRO - KOREA',
      'STURDY - TAIWAN',
      'ANDREAS HETTICH - GERMANY'
    ];
  return (
    <div className="search-screen">
      <div className="rowe">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="search-result">{products.length} Kết quả tìm kiếm</div>
        )}
        {/* <div>
          Sort by{' '}
          <select
            value={order}
            onChange={(e) => {
              props.history.push(getFilterUrl({ order: e.target.value }));
            }}
          >
            <option value="newest">Sản phẩm mới</option>
            <option value="lowest">Giá: Từ thấp đến cao</option>
            <option value="highest">Giá: Từ cao đến thấp</option>
          </select>
        </div> */}
      </div>
      <div className="row top">       
        <div className="subcategory">
        <h3>Hãng sản xuất</h3>
            {/* {loadingBrands ? (
              <LoadingBox></LoadingBox>
            ) : errorBrands ? (
              <MessageBox variant="danger">{errorBrands}</MessageBox>
            ) : ( */}
              <ul>
                <li>
                  <Link
                    className={'all' === brand ? 'active' : ''}
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
                      {c} <i className="fas fa-chevron-right"></i>
                    </Link>
                  </li>
                ))}
              </ul>   
         <div className="application">
            <h3>Ứng dụng</h3>
            <ul>
              {applies.map((c)=>(
                <li key={c}>
                  <Link to="#">
                   
                  </Link>
                </li>           
              ))}
            </ul>
          </div>          
        </div>
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
              <div className="rowe search-result">
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
}
