import React from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="checkout-page">
      <div className="checkout-page-header">
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <p className="text-center fw-bold">Checkout</p>
      </div>

      <div className="payment-section">
        <p className="fw-bold">Payment</p>

        <div className="mb-3">
          <div className="payment-row d-flex justify-content-between align-items-center">
            <div className="left-hand-side d-flex align-items-center">
              <div className="icon-box">
                <img
                  className="img-fluid"
                  src="/images/mastercard_icon-removebg-preview.png"
                  alt=""
                />
              </div>
              <span>Credit Card</span>
            </div>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="option1"
              checked
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="payment-row d-flex justify-content-between align-items-center">
            <div className="left-hand-side d-flex align-items-center">
              <div className="icon-box">
                <i className="fa-brands fa-paypal"></i>
              </div>
              <span>PayPal</span>
            </div>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="option2"
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="payment-row d-flex justify-content-between align-items-center">
            <div className="left-hand-side d-flex align-items-center">
              <div className="icon-box">
                <i className="fa-brands fa-apple"></i>
              </div>
              <span>Apple Pay</span>
            </div>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
              value="option3"
            />
          </div>
        </div>

        <div className="mb-3">
          <div className="payment-row d-flex justify-content-between align-items-center">
            <div className="left-hand-side d-flex align-items-center">
              <div className="icon-box">
                <i className="fa-solid fa-ellipsis"></i>
              </div>
              <span>All 15 methods</span>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
      </div>

      <div className="credit-card">
        <div className="mb-3">
          <p className="mb-3">credit card</p>
          <p>***** ******* 12345</p>
        </div>
        <div className="card-information">
          <p>Tej Karmer</p>
          <img
            className="img-fluid"
            src="/images/mastercard_icon-removebg-preview.png"
            alt=""
          />
        </div>
      </div>

      <div className="shipping-information mb-4">
        <div className="d-flex justify-content-between align-items-centers">
          <div>
            <p className="title mb-0 pb-2">Shipping information</p>
            <small className="text-secondary">
              93738 Ted Villages <br /> Apt. 419 Lake Tay. MA <br /> 09990
            </small>
          </div>
          <a href="/#">Edit</a>
        </div>
      </div>

      <div className="total">
        <p>Total</p>
        <p>$513.00</p>
      </div>

      <div className="proceed-payment">
        <p>pay</p>
      </div>
    </div>
  );
};

export default CheckoutPage;
