import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import sanbanh from '../Img/sanbong.jpg'

Products.propTypes = {
    products: PropTypes.array,
    sort: PropTypes.string
};

Products.defaultProps = {
    products: [],
    sort: ''
}

function Products(props) {

    const { products, sort } = props

    if (sort === 'DownToUp') {
        products.sort((a, b) => {
            return a.price - b.price
        });
    }
    else if (sort === 'UpToDown') {
        products.sort((a, b) => {
            return b.price - a.price
        });
    }


    return (
        <div className="row">
            <div className='product_container row'>
                <div className='product_container-part1'>
                    <div className='product_image'>
                        <img className='productImg' src={sanbanh} />
                    </div>
                    <div className='product_discription'>
                        <h2>Sân banh Thủ Đức</h2>
                        <h1 className="product__money">200.000 VNĐ</h1>
                        <p><strong className="product__detail">Địa chỉ:</strong> KTX khu B, ĐHQG, Dĩ An, Bình Dương</p>
                        <p><strong className="product__detail">Số điện thoại:</strong> 0123456790</p>
                        <p><strong className="product__detail">Xếp hạng: &nbsp;</strong> <strong className="rate-star">4.7 <i className="bi bi-star-fill"></i></strong></p>
                    </div>
                </div>
                <div className='product_container-part2'>
                    <div className='part2_upper'>
                        <div className="product-distance">500m</div>
                        <div className="product-status">NEW</div>
                    </div>
                    <div className='part2_bottom'>
                        <Link className="nav-link" to={`/detail/:id`}>
                             <button className="part2-btn">Chi tiết</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;