import React from "react";

export default function PricePlan() {
  return (
    <>
      <div className="row mx-5">
        <div
          className="faq_main  col-md-6"
          style={{ backgroundColor: "#F5F5F5" }}
        >
          <div className="section_heading text-center mb-4 pb-2">
            <h5 className="color_green1">Welcome To Crafty Art Design</h5>
            <h2 className="section_title mb-0">Select Your Best Plan</h2>
          </div>
          <div className="container">
            <div className="faq_inner">
              <div className="faq_accordion">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq1"
                        aria-expanded="true"
                        aria-controls="faq1"
                      >
                        Can I use Crafty Art for free?
                      </button>
                    </h2>
                    <div
                      id="faq1"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes, Crafty Art offers a free online logo maker. To
                          access it, select the Logo Maker option from the main
                          page and choose one of the premade templates. You can
                          then add your own images, text, and design elements to
                          customise the post. When you’re finished, click
                          "Save," and your logo will be ready to download.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq2"
                        aria-expanded="false"
                        aria-controls="faq2"
                      >
                        What are the benefits of a premium subscription?
                      </button>
                    </h2>
                    <div
                      id="faq2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          As a premium user you can download unlimited Crafty
                          Art assets, and various services.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq3"
                        aria-expanded="false"
                        aria-controls="faq3"
                      >
                        Why do i have to purchase Crafty Art Pro?
                      </button>
                    </h2>
                    <div
                      id="faq3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          With the premium user, you can access unlimited
                          service of Crafty Art Pro.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faq4"
                        aria-expanded="false"
                        aria-controls="faq4"
                      >
                        Are my downloads unlimited as a premium user?
                      </button>
                    </h2>
                    <div
                      id="faq4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p className="mb-0">
                          Yes, as a premium user, you have unlimited downloads.
                          There is no limitations on the use of Crafty Art
                          assets, templates, and the Background Remover Tool.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ========= CHOOSE PLAN SECTION ========= */}
        <section
          className="choose-plan my-5 container-fluid col-md-6"
          style={{ paddingTop: "40px" }}
        >
          <a
            href="javascript:;"
            className=" btn view-choose-plan mt-4 mb-5"
            data-bs-toggle="offcanvas"
            data-bs-target="#choosePlanOffcanvas"
            aria-controls="choosePlanOffcanvas"
          >
            <i className="fa-solid fa-crown text-warning pe-2" />
            View Subscriptions Plan
          </a>
          <div className="choose-plan-inner px-sm-0 px-3">
            <div className="justify-content-center align-items-center flex-wrap">
              <div className="px-3 mb-4">
                <div className="choose-plan-card common-card" id="basic">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="radioButton">
                      <input
                        type="radio"
                        id="f-option"
                        name="selector"
                        checked
                      />
                      <label htmlFor="f-option">
                        <h3 className="section_title">Basic</h3>
                      </label>
                      <div className="check"></div>
                    </div>

                    <div
                      className="choose-plan-inr"
                      style={{
                        display: "inline-block",
                        alignItems: "flex-end",
                      }}
                    >
                      <h4 className=" mb-0">₹99 /mon</h4>
                    </div>
                  </div>
                  <p className="section_title text-start">
                    Utilize Your Endless Creativity with Crafty Art - Unlimited
                    Downloads, No Limitations!
                  </p>
                </div>
              </div>

              <div className="px-3 mb-4">
                <div className="choose-plan-card common-card" id="pro">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="radioButton">
                      <input type="radio" id="f-option1" name="selector" />
                      <label htmlFor="f-option1">
                        <h3 className="section_title">Pro</h3>
                      </label>
                      <div className="check"></div>
                    </div>

                    <div
                      className="choose-plan-inr"
                      style={{
                        display: "inline-block",
                        alignItems: "flex-end",
                      }}
                    >
                      <h4 className=" mb-0">₹999 /year</h4>
                    </div>
                  </div>
                  <p className="section_title text-start">
                    Utilize Your Endless Creativity with Crafty Art - Unlimited
                    Downloads, No Limitations!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <section className="choose-plan my-3 container-fluid">
            <div className="choose-plan-inner px-sm-0 px-3">
              <div
                className="choose-plan-card"
                style={{ backgroundColor: "#F5F5F5" }}
              >
                <button
                  type="button"
                  className="btn text-center w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#payout"
                >
                  Get Started
                </button>
              </div>
            </div>
          </section>

          {/* ========= CHOOSE PLAN MODAL START ========= */}
          <div
            className="modal fade"
            id="payout"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body p-0 position-relative">
                  <button
                    type="button"
                    className=" btn close-btn"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                  <h3 className="finalize-payment-title text-center mb-0 d-sm-none d-block">
                    Finalize Payment
                  </h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="finalize-left">
                        <div className="logo mb-5 text-center d-none d-sm-block">
                          <img
                            src="assets/images/Icons/craftyart_logo.png"
                            alt="carftyicon"
                            className=""
                          />
                        </div>
                        <div className="finalize-card d-flex align-items-center">
                          <div className="d-none d-sm-block">
                            <div className="finalize-card-outer">
                              <div className="finalize-card-inner"></div>
                            </div>
                          </div>
                          <div className="finalize-card-contact ps-3">
                            <p className="mb-2">Billed Annually - 1255 INR</p>
                            <h4 className="mb-0">104.58 INR /mo</h4>
                          </div>
                        </div>
                        <div className="finalize-contact">
                          <p className="mb-2">You won't be charged today</p>
                          <p className="mb-2">
                            Paid subscription starts on November 12, 2022
                          </p>
                          <p className="mb-2">
                            Pay once upfront. No auto-renew.
                          </p>
                          <p className="mb-2">Top up whenever you want.</p>
                          <p className="mb-2">
                            You can cancel the premium anytime in your account
                            settingsp
                          </p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between border-top pt-3">
                          <h3 className="mb-0">Total Payout</h3>
                          <h3 className="mb-0">1255 INR</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="finalize-right">
                        <h3 className="finalize-payment-title text-center mb-0 d-sm-block d-none">
                          Finalize Payment
                        </h3>
                        <div className="d-flex align-items-center justify-content-around flex-wrap payment-image">
                          <a href="javscript:;">
                            <img
                              src="assets/images/Icons/razorpay_img.png"
                              alt="razorypay"
                              className="img-fluid"
                            />
                          </a>
                          <a href="javscript:;">
                            <img
                              src="assets/images/Icons/paypal_img.png"
                              alt="paypal"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="separator">
                          <div className="line" />
                          <h2 className="mb-0">or</h2>
                          <div className="line" />
                        </div>
                        <div className="finalize-contact flex-wrap pb-4">
                          <h4 className="mb-0 text-center">
                            Credit or debit card
                          </h4>
                          <div className="d-flex payment-card-img text-center">
                            <img
                              src="assets/images/payment-img/img-1.png"
                              alt="payment"
                              className="img-fluid"
                            />
                            <img
                              src="assets/images/payment-img/img-2.png"
                              alt="payment"
                              className="img-fluid"
                            />
                            <img
                              src="assets/images/payment-img/img-3.png"
                              alt="payment"
                              className="img-fluid"
                            />
                            <img
                              src="assets/images/payment-img/img-4.png"
                              alt="payment"
                              className="img-fluid"
                            />
                            <img
                              src="assets/images/payment-img/img-5.png"
                              alt="payment"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="payment-from mb-5">
                          <div className="row">
                            <div className="col-12 mb-4">
                              <div className="form-group position-relative">
                                <label htmlFor="" className="form-label">
                                  Card number
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id=""
                                  placeholder="1234 5678 9012 3456"
                                />
                                <div className="cart-img">
                                  <img
                                    src="assets/images/payment-img/cart-img-1.png"
                                    alt="cardimg"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6 mb-4">
                              <div className="form-group">
                                <label htmlFor="" className="form-label">
                                  Expiry date
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="MM/YY"
                                />
                              </div>
                            </div>
                            <div className="col-sm-6  mb-4">
                              <div className="form-group position-relative">
                                <label htmlFor="" className="form-label">
                                  CVV/CVC
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  id=""
                                  placeholder="3 Digit"
                                />
                                <div className="cart-img">
                                  <img
                                    src="assets/images/payment-img/cart-img-2.png"
                                    alt="cardimg"
                                    className="img-fluid"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="payment-text d-flex">
                            <i className="fa-solid fa-unlock-keyhole" />
                            <p className="mb-0 ps-2">
                              This transaction is secured with SSL encryption
                              and protected by reCAPTCHA.Privacy and Cookie
                              Policy and Terms of Service apply.
                            </p>
                          </div>
                        </div>
                        <div className="paynow_button">
                          <a
                            className="btn paynow my-3"
                            data-bs-toggle="offcanvas"
                            href="javascript:;"
                            data-bs-target="#offcanvasBottom"
                            role="button"
                          >
                            Pay Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========= CHOOSE PLAN OFFCANVAS START ========= */}
          <div
            className="offcanvas offcanvas-end "
            tabIndex={-1}
            id="choosePlanOffcanvas"
            aria-labelledby="choosePlanOffcanvasLabel"
          >
            <div className="offcanvas-header justify-content-start align-items-baseline">
              <button
                type="button"
                className="btn text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="fa-solid fa-arrow-left" />
              </button>
              <h5 className="section_heading_title mb-0">Subscriptions Plan</h5>
            </div>
            <div className="plan-inner-body">
              <div className="plan-card card active mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Basic</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">99</h3>
                    <p className="text-start mb-0">INR / per 7 days</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Standard</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">299</h3>
                    <p className="text-start mb-0">INR / per 1 month</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Premium</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">899</h3>
                    <p className="text-start mb-0">INR / per 6 month</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Silver</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">1255</h3>
                    <p className="text-start mb-0">INR / per 1 year</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Gold</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">2149</h3>
                    <p className="text-start mb-0">INR / per 2 year</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
              <div className="plan-card card mb-3">
                <div className="card-header">
                  <h3 className="plan-card-title text-center mb-0">Platinum</h3>
                </div>
                <div className="card-body text-center mx-auto">
                  <div className="plan-card-contact d-flex align-items-baseline ">
                    <h3 className="mb-0">4469</h3>
                    <p className="text-start mb-0">INR / per 5 year</p>
                  </div>
                  <p className="mb-0">Best for professionals</p>
                </div>
              </div>
            </div>
            <div className="plan-inner-footer">
              <a
                href="javascript:;"
                className="btn paynow py-2"
                data-bs-toggle="modal"
                data-bs-target="#payout"
              >
                Next
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
