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
               <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                ></input>
              {/* <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)} aria-label="Default select example">
                <option defaultValue="Lò nung">Lò nung</option>
                <option value="Máy ly tâm">Máy ly tâm</option>
                <option value="Máy đo">Máy đo</option>
                <option value="Máy hấp tiệt trùng">Máy hấp tiệt trùng</option>
                <option value="Các loại tủ đựng">Các loại tủ đựng</option>
                <option value="Tủ sấy">Tủ sấy</option>
              </select> */}
            </div>
              <div>
                <label htmlFor="subcategory">Subcategory</label>
                <input id="subcategory" className="form-select" value={removeVietnameseTones(category).toLowerCase().split(" ").join("-")} onChange={(e) => setSubcategory(e.target.value)} aria-label="Default select example">            
                </input>
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
                onReady={editor =>{

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
