import React from "react";
import { Outlet } from "react-router-dom";
import "@popperjs/core";
import { navList } from "../shared/navList";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const IndexLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  if (
    products.map((p) => {
      return p.id;
    })
  ) {
    <button>
      <i className="fa-solid fa-trash-can"></i>
    </button>;
  }
  return (
    <div className="index-layout">
      <div className="d-none d-sm-flex flex-column align-items-center justify-content-center">
        <div className="styles-content">
          <div className="first-circle"></div>
          <div className="circle-grad"></div>
          <div className="card-1">
            <div className="profile-avatar mb-3 ps-3">
              <img src="/images/avatar_4.png" alt="" />
            </div>

            <div className="welcome-text ps-3">
              <p className="text-light">
                Hey, <i className="text-warning fa-solid fa-hands-clapping"></i> <br /> <span className="fw-bold">Lily Watson</span>
              </p>
            </div>
            <nav>
              <ul className="nav flex-column">
                {navList.map((nav, i) => (
                  <li className="nav-item py-2" key={i}>
                    <Link to={nav.link} className={`nav-link ${pathname === nav.link ? "active" : ""}`}>
                      <i className={`fas ${nav.icon} ps-3`}></i>
                      <span>{nav.name}</span>
                    </Link>
                  </li>
                ))}

                <li className="nav-item ps-3 py-2">
                  <div className="horizontal-line"></div>
                </li>

                <li className="nav-item py-2">
                  <Link to={"/#settings"} className={`nav-link ${pathname === "/#signout" ? "active" : ""}`}>
                    <i className="fas ps-3 fa-arrow-right-from-bracket"></i>
                    <span>Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="card-2">
            <div className="checkout-page_header">
              <button onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left text-dark"></i>
              </button>
              <p className="text-center fw-bold">Checkout</p>
            </div>
            <div className="payment-section">
              <p className="fw-bold">Payment</p>

              <div className="mb-3">
                <div className="payment-row d-flex justify-content-between align-items-center">
                  <div className="left-hand-side d-flex align-items-center">
                    <div className="icon-box">
                      <img className="img-fluid" src="/images/mastercard_icon-removebg-preview.png" alt="" />
                    </div>
                    <span>Credit Card</span>
                  </div>
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="option1" checked />
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
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="option2" />
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
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="option3" />
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
            <div className="hold">
              <div className="credit-card">
                <div className="mb-3">
                  <p className="mb-3">credit card</p>
                  <p>***** ******* 12345</p>
                </div>
                <div className="card-information">
                  <p>Tej Karmer</p>
                  <img className="img-fluid" src="/images/mastercard_icon-removebg-preview.png" alt="" />
                </div>
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
              <div className="text-center">
                <div></div>
              </div>
            </div>
          </div>

          <div className="card-3">
            <div className="checkout-page_header">
              <button onClick={() => navigate(-1)}>
                <i className="fa-solid fa-arrow-left text-dark"></i>
              </button>
              <p className="text-center fw-bold">My cart</p>
            </div>
            {products.map((p) => {
              return (
                <div className="products" key={p.id}>
                  <div className="pr">
                    <div className="prod">
                      <img src={p.image} alt="/" />
                      <div className="content">
                        <p className="p-name">{p.name}</p>
                        <p>{p.brand}</p>
                        <div>
                          <p>{p.price}</p> <p>{p.btn}</p>
                        </div>
                      </div>
                    </div>
                    <div className="action">
                      <i className="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="total">
              <p>Total</p>
              <p>$513.00</p>
            </div>

            <div className="proceed-payment">
              <p>Checkout</p>
              <div className="text-center">
                <div></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="circle"></div>
            <p>
              <span>Insightlancer</span>
              <hr />
            </p>
          </div>
        </div>
      </div>
      <main className="index-layout-main d-sm-none">
        <Outlet />
      </main>
    </div>
  );
};

export default IndexLayout;

const products = [
  {
    id: 1,
    image: "/images/blueshoe.png",
    name: "Nike ACG Mountain",
    brand: "style: DA1979-001",
    btn: (
      <div style={{ display: "flex", gap: "1rem" }}>
        <p>-</p> <p>1</p> <button style={{ padding: "", color: "white", alignItems: "center", backgroundColor: "black" }}>+</button>
      </div>
    ),
    price: "$180",
  },
  {
    id: 2,
    image: "/images/redshoe.png",
    name: "Nike ACG Mountain",
    brand: "style: DA1979-001",
    price: "$180",
    btn: (
      <div style={{ display: "flex", gap: "1rem" }}>
        <p>-</p> <p>1</p> <button style={{ padding: "", color: "white", backgroundColor: "black" }}>+</button>
      </div>
    ),
  },
  {
    id: 3,
    image: "/images/blueshoe.png",
    name: "Nike ACG Mountain",
    brand: "style: DA1979-001",
    price: "$180",
    btn: (
      <div style={{ display: "flex", gap: "1rem" }}>
        <p>-</p> <p>1</p> <button style={{ padding: "", color: "white", backgroundColor: "black" }}>+</button>
      </div>
    ),
  },
];
