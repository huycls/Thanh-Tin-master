import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from 'axios';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {CKEditor} from '@ckeditor/ckeditor5-react';



export default function ProductEditScreen(props) {
  const productId = props.match.params.id;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [parameter, setParameter] = useState('');
  const [video, setVideo] = useState('');
  const [catalog, setCatalog] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [model, setModel] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      props.history.push('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setSubcategory(product.subcategory);
      setParameter(product.parameter);
      setVideo(product.video);
      setCatalog(product.catalog);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setDescription(product.description);
      setModel(product.model);
    }
  }, [product, dispatch, productId, successUpdate, props.history]);
  const submitHandler = (e) => {
    e.preventDefault();
    // TODO: dispatch update product
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        category,
        subcategory,
        parameter,
        model,
        video,
        catalog,
        brand,
        countInStock,
        description,
      })
    );
  };
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post('/api/uploads', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setImage(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };
  // ClassicEditor
  //   .create( document.querySelector( '#parameter' ) )
  //   .then( editor => {
  //       console.log( editor );
  //   } )
  //   .catch( error => {
  //       console.error( error );
  //   } );
  
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product id: {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Tên sản phẩm </label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Giá (VNĐ)</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="image">Hình ảnh</label>
              <input
                id="image"
                type="text"
                placeholder="Enter image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="imageFile">Chọn ảnh từ máy tính</label>
              <input
                type="file"
                id="imageFile"
                label="Choose Image"
                onChange={uploadFileHandler}
              ></input>
              {loadingUpload && <LoadingBox></LoadingBox>}
              {errorUpload && (
                <MessageBox variant="danger">{errorUpload}</MessageBox>
              )}
            </div>
            <div>
              <label htmlFor="category">Category</label>
              {/* <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input> */}
              <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                <option defaultValue="THIẾT BỊ NGÀNH GIẤY">THIẾT BỊ NGÀNH GIẤY</option>
                <option value="THIẾT BỊ NGÀNH BAO BÌ GIẤY">THIẾT BỊ NGÀNH BAO BÌ GIẤY</option>
                <option value="THIẾT BỊ NGÀNH BAO BÌ NHỰA">THIẾT BỊ NGÀNH BAO BÌ NHỰA</option>
                <option value="THIẾT BỊ NGÀNH CAO SU - NHỰA">THIẾT BỊ NGÀNH CAO SU - NHỰA</option>
                <option value="THIẾT BỊ THỬ NGHIỆM THÉP">THIẾT BỊ THỬ NGHIỆM THÉP</option>
                <option value="THIẾT BỊ NGÀNH SƠN - XI MẠ">THIẾT BỊ NGÀNH SƠN - XI MẠ</option>
                <option value="THIẾT BỊ NGÀNH VẬT LIỆU XÂY DỰNG">THIẾT BỊ NGÀNH BAO BÌ NHỰA</option>
                <option value="THIẾT BỊ NGÀNH THỰC PHẨM">THIẾT BỊ NGÀNH THỰC PHẨM</option>
                <option value="THIẾT BỊ NGÀNH DƯỢC PHẨM">THIẾT BỊ NGÀNH DƯỢC PHẨM</option>
                <option value="THIẾT BỊ NGÀNH Y TẾ - SINH HỌC">THIẾT BỊ NGÀNH Y TẾ - SINH HỌC</option>
                <option value="THIẾT BỊ NGÀNH NƯỚC VÀ MÔI TRƯỜNG">THIẾT BỊ NGÀNH NƯỚC VÀ MÔI TRƯỜNG</option>
                <option value="THIẾT BỊ ĐO ONLINE (KHÍ THẢI - NƯỚC THẢI - NƯỚC CẤP)">THIẾT BỊ ĐO ONLINE (KHÍ THẢI - NƯỚC THẢI - NƯỚC CẤP)</option>
                <option value="HỆ THỐNG QUAN TRẮC NƯỚC THẢI - KHÍ THẢI TỰ ĐỘNG">HỆ THỐNG QUAN TRẮC NƯỚC THẢI - KHÍ THẢI TỰ ĐỘNG</option>
                <option value="THIẾT BỊ CƠ BẢN PHÒNG THÍ NGHIỆM">THIẾT BỊ CƠ BẢN PHÒNG THÍ NGHIỆM</option>
              </select>
            </div>
            <div>
              <label htmlFor="subcategory">Subcategory</label>
              <select id="subcategory" className="form-select" value={subcategory} onChange={(e) => setSubcategory(e.target.value)} aria-label="Default select example">
                <option defaultValue=""></option>
                <option value="THIẾT BỊ NGÀNH GIẤY">THIẾT BỊ NGÀNH GIẤY</option>
                <option value="THIẾT BỊ NGÀNH BAO BÌ GIẤY">THIẾT BỊ NGÀNH BAO BÌ GIẤY</option>
                <option value="THIẾT BỊ NGÀNH BAO BÌ NHỰA">THIẾT BỊ NGÀNH BAO BÌ NHỰA</option>
                <option value="THIẾT BỊ NGÀNH CAO SU - NHỰA">THIẾT BỊ NGÀNH CAO SU - NHỰA</option>
                <option value="THIẾT BỊ THỬ NGHIỆM THÉP">THIẾT BỊ THỬ NGHIỆM THÉP</option>
                <option value="THIẾT BỊ NGÀNH SƠN - XI MẠ">THIẾT BỊ NGÀNH SƠN - XI MẠ</option>
                <option value="THIẾT BỊ NGÀNH VẬT LIỆU XÂY DỰNG">THIẾT BỊ NGÀNH BAO BÌ NHỰA</option>
                <option value="THIẾT BỊ NGÀNH THỰC PHẨM">THIẾT BỊ NGÀNH THỰC PHẨM</option>
                <option value="THIẾT BỊ NGÀNH DƯỢC PHẨM">THIẾT BỊ NGÀNH DƯỢC PHẨM</option>
                <option value="THIẾT BỊ NGÀNH Y TẾ - SINH HỌC">THIẾT BỊ NGÀNH Y TẾ - SINH HỌC</option>
                <option value="THIẾT BỊ NGÀNH NƯỚC VÀ MÔI TRƯỜNG">THIẾT BỊ NGÀNH NƯỚC VÀ MÔI TRƯỜNG</option>
                <option value="THIẾT BỊ ĐO ONLINE (KHÍ THẢI - NƯỚC THẢI - NƯỚC CẤP)">THIẾT BỊ ĐO ONLINE (KHÍ THẢI - NƯỚC THẢI - NƯỚC CẤP)</option>
                <option value="HỆ THỐNG QUAN TRẮC NƯỚC THẢI - KHÍ THẢI TỰ ĐỘNG">HỆ THỐNG QUAN TRẮC NƯỚC THẢI - KHÍ THẢI TỰ ĐỘNG</option>
                <option value="THIẾT BỊ CƠ BẢN PHÒNG THÍ NGHIỆM">THIẾT BỊ CƠ BẢN PHÒNG THÍ NGHIỆM</option>
              </select>
            </div>
            <div>
              <label htmlFor="brand">Hãng sản xuất</label>
              <select id="brand" className="form-select" value={brand} onChange={(e) => setBrand(e.target.value)} aria-label="Default select example">
                <option defaultValue="ALP - JAPAN">ALP - JAPAN</option>
                <option value="EMCO - GERMANY">EMCO - GERMANY</option>
                <option value="CONSORT">CONSORT</option>
                <option value="DOSER - GERMANY">DOSER - GERMANY</option>
                <option value="PNSHAR - CHINA">PNSHAR - CHINA</option>
                <option value="KRUSS - GERMANY">KRUSS - GERMANY</option>
                <option value="PTA - EUROPE">PTA - EUROPE</option>
                <option value="COMETECH - TAIWAN">COMETECH - TAIWAN</option>
                <option value="NABERTHERM - GERMANY">NABERTHERM - GERMANY</option>
                <option value="TILO">TILO</option>
                <option value="IDM TEST - SPAIN">IDM TEST - SPAIN</option>
                <option value="HAMILTON - ENGLAND">HAMILTON - ENGLAND</option>
                <option value="NOVAPRO - KOREA">NOVAPRO - KOREA</option>
                <option value="STURDY - TAIWAN">STURDY - TAIWAN</option>
                <option value="ANDREAS HETTICH - GERMANY">ANDREAS HETTICH - GERMANY</option>
              </select>
            </div>
            <div>
              <label htmlFor="countInStock">Số lượng</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="model">Model:</label>
              <input
                id="model"
                type="text"
                placeholder="Enter Model"
                value={model}
                onChange = {(e) => setModel(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Mô tả:</label>
              <textarea
                rows="4"
                id="description"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
        
            <div>
              <label htmlFor="parameter">Thông số kỹ thuật</label>
                {/* <textarea
                id="parameter"
                name="editor1"
                rows="10"
                type="text"
                placeholder="Enter parameter"
                value={parameter}
                onChange={(e) => setParameter(e.target.value)}
              > </textarea>   */}
              <CKEditor 
                editor={ClassicEditor}
                data={parameter}
                onInit={editor =>{

                }}
                onChange = {(event, editor) => {
                  const data = editor.getData();
                  console.log(data);
                  setParameter(data);
                }}
              />
            </div>
          
            <div>
               <label htmlFor="video">Link Video</label>
               <input
                id="video"
                type="text"
                placeholder="Enter Link video"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
               ></input> 
            </div>
            
            <div>
               <label htmlFor="catalog">Link catalog</label>
               <input
                id="catalog"
                type="text"
                placeholder="Enter Link catalog"
                value={catalog}
                onChange={(e) => setCatalog(e.target.value)}
               ></input> 
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Cập nhật
              </button>
            </div>
          </>
        )}
      </form>
      
    </div>
  );
}
