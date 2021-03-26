import React from 'react';
import {Link} from 'react-router-dom';


function Allnews(){
    return <div className="allnewspage">
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3 nav-news" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <h3>Danh mục tin</h3>
                <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tin tức</button>
                <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Ứng dụng</button>
                <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Giải pháp</button>
            </div>
            <div className="tab-content tab-news" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div className="news-component">
                        <Link className="newscomponent-title">Công ty Thành Tín là nhà phân phối chính thức cho dòng cân HE/TLE/HE của hãng METTLER TOLEDO (Thụy Sỹ)</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">THÔNG BÁO THAY ĐỔI TÊN GIAO DỊCH</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">ANALYTICA VIETNAM 2013 TRIỂN LÃM QUỐC TẾ LẦN THỨ 3 VỀ CÔNG NGHỆ THÍ NGHIỆM, PHÂN TÍCH, CÔNG NGHỆ SINH HỌC VÀ CHẨN ĐOÁN</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">TUYỂN NHÂN VIÊN KINH DOANH</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                <div className="news-component">
                        <Link className="newscomponent-title">Ứng dụng</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">THÔNG BÁO THAY ĐỔI TÊN GIAO DỊCH</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">ANALYTICA VIETNAM 2013 TRIỂN LÃM QUỐC TẾ LẦN THỨ 3 VỀ CÔNG NGHỆ THÍ NGHIỆM, PHÂN TÍCH, CÔNG NGHỆ SINH HỌC VÀ CHẨN ĐOÁN</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">TUYỂN NHÂN VIÊN KINH DOANH</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                <div className="news-component">
                        <Link className="newscomponent-title">Giải pháp</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">THÔNG BÁO THAY ĐỔI TÊN GIAO DỊCH</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">ANALYTICA VIETNAM 2013 TRIỂN LÃM QUỐC TẾ LẦN THỨ 3 VỀ CÔNG NGHỆ THÍ NGHIỆM, PHÂN TÍCH, CÔNG NGHỆ SINH HỌC VÀ CHẨN ĐOÁN</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">TUYỂN NHÂN VIÊN KINH DOANH</Link>
                        <Link className="to-news">Xem chi tiết</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Allnews;