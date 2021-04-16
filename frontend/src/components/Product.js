import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';


export default withNamespaces((props) => props.namespaces) (function Product(props) {
  const {t} = props;
  const { product } = props;
  let name = product.name;
  let enname = product.enname;
  const cutname = name.length > 50 ? 
                  name.substring(0, 47) + "..." :
                  name;
  const cutenname = enname.length > 50 ? 
                    enname.substring(0, 47) + "..." :
                    enname;
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
  const urlname = removeVietnameseTones(name).toLowerCase()
                      .split(" ")
                      .join("-");
  let brand = product.brand;
  let vnbrand = product.vnbrand;
  const custombrand = brand.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());  
  const vncustombrand = vnbrand.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());
  let queryParameter = {
    name: urlname,
  }
  return (
    <div key={product._id} className="card product-card">
      <Link className="card-header" to={`/san-pham/${product._id}`}>
        <img className="small" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/san-pham/${product._id}`} className="product-name">
          <h2>{t("cutname", {product})}</h2>
        </Link>
        <div className="row">
          <div className="product-model"><strong>Model: </strong> {product.model}</div>
          <div className="product-brand"><strong>{t("brand.label")}: </strong> {t("productbrand", {product})}</div>
        </div>
        <Link className="details-btn" to={`/san-pham/${product._id}`}>
          {t("detailbtn.label")}
        </Link>
      </div>
    </div>
  );
})
