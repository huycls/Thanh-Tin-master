import React from 'react';
import {Link} from 'react-router-dom';


function Allnews(){
    return <div className="allnewspage">
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3 nav-news" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <h3><i class="fas fa-bars"></i> Danh mục tin</h3>
                <button className="nav-link news-nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Tin tức</button>
                <button className="nav-link news-nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Ứng dụng</button>
                <button className="nav-link news-nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Giải pháp</button>
            </div>
            <div className="tab-content tab-news" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div className="news-component">
                        <Link to="/news" className="newscomponent-title">Công ty Thành Tín là nhà phân phối chính thức cho dòng cân HE/TLE/HE của hãng METTLER TOLEDO (Thụy Sỹ)</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/news">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title" to="/news1">Thông báo thay đổi tên giao dịch</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title" to="/news2">ANALYTICA VIETNAM 2013 TRIỂN LÃM QUỐC TẾ LẦN THỨ 3 VỀ CÔNG NGHỆ THÍ NGHIỆM, PHÂN TÍCH, CÔNG NGHỆ SINH HỌC VÀ CHẨN ĐOÁN</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/news2">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title" to="/news3">TUYỂN NHÂN VIÊN KINH DOANH</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/news3">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div className="news-component">
                        <Link className="newscomponent-title">Giải pháp</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">Thông báo thay đổi tên giao dịch</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">ANALYTICA VIETNAM 2013 TRIỂN LÃM QUỐC TẾ LẦN THỨ 3 VỀ CÔNG NGHỆ THÍ NGHIỆM, PHÂN TÍCH, CÔNG NGHỆ SINH HỌC VÀ CHẨN ĐOÁN</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image" to="/news2">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">TUYỂN NHÂN VIÊN KINH DOANH</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <div className="news-component">
                        <Link className="newscomponent-title">Ứng dụng</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">Thông báo thay đổi tên giao dịch</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">ANALYTICA VIETNAM 2013 TRIỂN LÃM QUỐC TẾ LẦN THỨ 3 VỀ CÔNG NGHỆ THÍ NGHIỆM, PHÂN TÍCH, CÔNG NGHỆ SINH HỌC VÀ CHẨN ĐOÁN</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                    <div className="news-component">
                        <Link className="newscomponent-title">TUYỂN NHÂN VIÊN KINH DOANH</Link>
                        <div className="newscomponent-content">
                            <Link className="newscomponent-image">
                                <img src="./images/logo.png" alt="news-bla" />
                            </Link>
                            <p className="newscomponent-detail">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non eros eget mauris gravida ornare. Vestibulum consectetur, ante vel consectetur ornare, sapien sem laoreet urna, ac rhoncus enim ligula vitae odio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Allnews;