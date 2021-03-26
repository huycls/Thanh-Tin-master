import React from 'react';

function IntroScreen(){
    return <div className="intro-page">
        
        <div className="intro-content">
        <h1><img className="intro-image" src="../images/logofavico.jpg"></img> Giới thiệu</h1>
        <small>15-1-2020, 4:51 pm</small>
            <p><span><strong className="company-name">công ty tnhh thiết bị và hóa chất thành tín</strong> hoạt động trong lĩnh vực tư vấn, cung cấp các giải pháp, thiết bị phòng thí nghiệm, thiết bị công nghiệp, hóa chất, vật tư chủ yếu trong các lĩnh vực sau:</span></p>
            <ul>
                <li><i className="fas fa-chevron-right"></i> Giải pháp phòng thí nghiệm ngành thực phẩm - nước giải khát, thức ăn chăn nuôi, thủy sả</li>
                <li><i className="fas fa-chevron-right"></i> Giải pháp thiết bị ngành Y tế - Sinh học</li>
                <li><i className="fas fa-chevron-right"></i> Giải pháp kiểm tra vật liêu (Nhựa, bao bì nhựa, giấy, bao bì giấy, cao su, thép, sơn, xi mạ, dệt, giày da,...)</li>
                <li><i className="fas fa-chevron-right"></i> Giải pháp phòng thí nghiệm ngành dược phẩm - hóa mỹ phẩm</li>
                <li><i className="fas fa-chevron-right"></i> Ngành nước cấp, nước thải và môi trường</li>
           </ul>
           <h2>Tầm nhìn & Sứ mệnh: </h2>
           <ul>
               <li><i className="fas fa-chevron-right"></i> Trở thành nhà cung cấp dẫn đầu cung cấp giải pháp tổng thể chuyên ngành, lĩnh vực ứng dụng.</li>
               <li><i className="fas fa-chevron-right"></i> Cung cấp các dịch vụ kỹ thuật trọn gói : bảo dưỡng, sửa chữa và hiệu chuẩn, tư vấn tiêu chuẩn và kỹ thuật.</li>
                <li><i className="fas fa-chevron-right"></i> Giá trị cốt lõi : Trung thực – Trách nhiệm – Cầu thị</li>
           </ul>
           <h2>Triết lý kinh doanh: </h2>
           <ul>
               <li><i className="fas fa-chevron-right"></i> Chỉ cung cấp thiết bị có thương hiệu và chất lượng tốt</li>
               <li><i className="fas fa-chevron-right"></i> Đặt lợi ích khách hàng và thành công khách hàng trước tiên</li>
                <li><i className="fas fa-chevron-right"></i> Vì sự thành công của đội ngũ cộng sự và đối tác</li>
           </ul>
           <p> Chúng tôi mong muốn được thiết lập mối quan hệ với tất cả các đơn vị trong và ngoài nước trên tinh thần hợp tác vì sự phồn vinh của xã hội và đôi bên cùng có lợi.</p>
        </div>
        <div className="introinfo-field">
        <div className="intro-info">
            <strong className="company-name">Thông tin liên hệ</strong>
            <p><strong className="office-name">VPHCM : </strong>78 Đường Số 1A, Khu Phố 4, P. Bình Hưng Hòa B, Quận Bình Tân, Tp.HCM</p>
            <p><strong>Điện thoại:</strong>(028) 36 360 901</p>
            <p><span><strong>Fax: </strong>(028) 36 360 902  <strong>MST: </strong>0311941553</span></p>
            <p><strong>Phòng kinh doanh: </strong><a href="mailto:sales@thanhtin-tech.com">sales@thanhtin-tech.com</a>   </p>
            <p><strong>Phòng kỹ thuật: </strong><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a></p>
        </div>
        <div className="intro-info">
            <p><strong className="office-name">Ha Noi Office (ADANA Complex) : </strong>Lô 3, khu A1-A2-A3, đường Cầu Thanh Trì, Phường Cự Khối, Quận Long Biên, Hà Nội</p>
            <p><strong>Phòng kinh doanh: </strong><a href="mailto:hanoi@thanhtin-tech.com">hanoi@thanhtin-tech.com</a></p>
            <p><strong>Phòng kỹ thuật: </strong><a href="mailto:service@thanhtin-tech.com">service@thanhtin-tech.com</a></p>
        </div>
        </div>
    </div>
}
export default IntroScreen;
