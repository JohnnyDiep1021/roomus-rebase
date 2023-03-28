import React, { useEffect, useState } from 'react';
import sanbanh from './Img/sanbong.jpg'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function PaymentPage(props) {

    return (
        <div className='payment__detail'>
            <div className='payment__left'>
                <div className='payment__tabs'>
                    <button className='payment__tabs-1'>TIỀN MẶT</button>
                    <button className='payment__tabs-2'>VÍ ĐIỆN TỬ</button>
                </div>
                <div className="payment__card">
                <h2 className="payment__heading">Thanh Toán</h2>
                <div className="payment">
                    <div className="payment__photo">
                    <img className='pmImg' src={sanbanh} />
                    </div>
                    <div className="payment__description">
                        <h2>Sân banh Thủ Đức</h2>
                        <p><strong className="payment__title">Thông tin chi tiết:</strong></p>
                        <p><strong className="payment__title">Địa chỉ:</strong> KTX khu A, làng ĐHQG TPHCM</p>
                        <p><strong className="payment__title">Số điện thoại:</strong> 0123456790</p>
                        <p><strong className="payment__title">Thời gian:</strong> 14h00 - 29/02/2023</p>
                        <h1 className="payment__money">200.000 VNĐ</h1>
                    </div>
                </div>
                <div className="line_border"></div>
                <div className='payment__note'>
                    <p><strong className="payment__note-item">Ghi chú:</strong></p>
                    <p><strong className="payment__title">Sân sẽ bị hủy nếu như khách hàng trễ lịch đặt quá 15 phút</strong></p>
                </div>
                <div className='payment__btns'>
                    <button className="payment__book-btn">Thanh toán</button>
                    <button className="payment__favorite-btn">Chỉnh sửa</button>
                </div>
                </div>
            </div>
            <div className='payment__right'>
                <ul className='payment__right-information'>
                    <li className='pm__right-heading'>
                        <div className='pm__right-hd'>
                            <p>THÔNG TIN THANH TOÁN</p>
                        </div>
                    </li>
                    <li className='pm__right-item'>
                        <div className='pm__right-input'>
                            <FontAwesomeIcon icon={faUser} className="pm__right-icon"></FontAwesomeIcon>
                            <input type="text" className='txt-input' placeholder='Tên: Nguyễn Khoa Đăng'/>
                        </div>
                    </li>
                    <li className='pm__right-item'>
                        <div className='pm__right-input'>
                            <FontAwesomeIcon icon={faUser} className="pm__right-icon"></FontAwesomeIcon>
                            <input type="text" className='txt-input' placeholder='Tên: Nguyễn Khoa Đăng'/>
                        </div>
                    </li>
                    <li className='pm__right-item'>
                        <div className='pm__right-input'>
                            <FontAwesomeIcon icon={faUser} className="pm__right-icon"></FontAwesomeIcon>
                            <input type="text" className='txt-input' placeholder='Tên: Nguyễn Khoa Đăng'/>
                        </div>
                    </li>
                    <li className='pm__right-item'>
                        <div className='pm__right-input'>
                            <FontAwesomeIcon icon={faUser} className="pm__right-icon"></FontAwesomeIcon>
                            <input type="text" className='txt-input' placeholder='Tên: Nguyễn Khoa Đăng'/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    );
}

export default PaymentPage;

