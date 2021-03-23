import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);


  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [lat, setLat] = useState(shippingAddress.lat);
  const [lng, setLng] = useState(shippingAddress.lng);
  const userAddressMap = useSelector((state) => state.userAddressMap);
  const { address: addressMap } = userAddressMap;

  
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [company, setCompany] = useState(shippingAddress.company);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [email, setEmail] = useState(shippingAddress.email);
  const [phonenumber, setPhonenumber] = useState(shippingAddress.phonenumber);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const newLat = addressMap ? addressMap.lat : lat;
    const newLng = addressMap ? addressMap.lng : lng;
    if (addressMap) {
      setLat(addressMap.lat);
      setLng(addressMap.lng);
    }
    let moveOn = true;
    
    if (moveOn) {
      dispatch(
        saveShippingAddress({
          fullName,
          company,
          address,
          city,
          email,
          phonenumber,
        })
      );
      props.history.push('/placeorder');
    }
  };
  
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Thông tin khách hàng</h1>
        </div>
        <div>
          <label htmlFor="fullName">Tên đầy đủ</label>
          <input
            type="text"
            id="fullName"
            placeholder=" "
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Tên công ty</label>
          <input
            type="text"
            id="company"
            placeholder=" "
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="address">Địa chỉ</label>
          <input
            type="text"
            id="address"
            placeholder=""
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="city">Tỉnh/Thành phố</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="phonenumber">Điện thoại</label>
          <input
            type="text"
            id="phonenumber"
            placeholder=""
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
          ></input>
        </div>
        
        <div>
          <label />
          <button className="primary" type="submit">
            Tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
}
