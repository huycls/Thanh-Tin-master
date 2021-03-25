import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CART_EMPTY } from '../constants/cartConstants';

export default function ShippingAddressScreen(props) {
 
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [company, setCompany] = useState(shippingAddress.company);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [email, setEmail] = useState(shippingAddress.email);
  const [phonenumber, setPhonenumber] = useState(shippingAddress.phonenumber);
  const dispatch = useDispatch();


    const submitHandler = (e) => {
      e.preventDefault();
      const templateId = 'template_wboxegd';
      sendOrders(templateId, {full_name: fullName, company: company, address: address, city: city, email: email, phonenumber: phonenumber, product: cart.cartItems.map(item => item.name)})
      dispatch({ type: CART_EMPTY });
      localStorage.removeItem('cartItems');   
   };

   const sendOrders = (templateId, variables) =>{
     window.emailjs.send(
       'service_8sszg3c', templateId,
       variables
       ).then( res =>{
         alert('Your request successfully sent!');
         const inputs = document.querySelectorAll('input');
          inputs.forEach(input => input.value = ''); 
       })
       .catch(err => console.error("Your request has been failed, please try later", err))
     
   }
  
  return (
    <div>
      <form className="form">
        <div>
          <h1>Thông tin khách hàng</h1>
        </div>
        <div>
          <label htmlFor="fullName">Tên đầy đủ</label>
          <input
            name="Ten_khach_hang"
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
            name="Cong_ty"
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
            name="Dia_chi"
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
            name="Thanh_pho"
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
            name="Email"
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
            name="SDT"
            type="text"
            id="phonenumber"
            placeholder=""
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <ul>
            {cart.cartItems.map(item => (
              <li key={item.product}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <label />
          <button className="primary" id="submit-btn" type="submit" onClick={submitHandler}>
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );
}
