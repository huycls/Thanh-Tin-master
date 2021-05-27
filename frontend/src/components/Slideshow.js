import React from 'react';
import {Link} from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

export default withNamespaces() (function Slideshow({t}){
    function dropdownmenu() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      //Close dropdown menu when click link
  function closeDropdown(){
    const dropdown1 = document.querySelector('.news-content'); 
    if(dropdown1.classList.contains("show")){
      dropdown1.classList.remove("show");
    }
  }
    return  <div className="home-upper">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src="./images/1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="./images/2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="./images/3.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="./images/4.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src="./images/5.jpg" className="d-block w-100" alt="..." />
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
        <div className="news"> 
          <div className="news-title"><Link to="/tat-ca-tin-tuc">{t("news.label")}</Link><button onClick={dropdownmenu} className="resdropdown-btn"><i className="fas fa-sort-down"></i></button></div>
          <div className="news-content"  id="myDropdown">
            <Link onClick={closeDropdown} to="/cong-ty-thanh-tin-la-nha-phan-phoi-chinh-thuc-cho-hang-mettler-toledo">
              <p className="news-link">
                <i className="fas fa-chevron-right"></i><span>{t("news.label1")}</span>
              </p>
            </Link>
            <Link onClick={closeDropdown} to="/thong-bao-thay-doi-ten-giao-dich">
              <p className="news-link">
                <i className="fas fa-chevron-right"></i><span>{t("news.label2")}</span>
              </p>
            </Link>
            <Link onClick={closeDropdown} to="/analytica-viet-nam-2013">
              <p className="news-link">
                <i className="fas fa-chevron-right"></i><span>{t("news.label3")}</span>
              </p>
            </Link>
            <Link onClick={closeDropdown} to="/tuyen-nhan-vien-kinh-doanh">
              <p className="news-link">
                <i className="fas fa-chevron-right"></i><span>{t("news.label4")}</span>
              </p>
            </Link>        
          </div>
        </div>
    </div>
})