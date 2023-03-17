import React from "react";

export default function LoginRegister(){
  return (
    <>
        {/* ============== LOGIN SCREEN OFFCANVAS FOR MOBILE VIEW ========== */}
            <div className="login_modal d-block d-lg-none">
              <div
                className="offcanvas offcanvas-bottom"
                tabIndex={-1}
                id="loginOffcanvas_mobile"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-header pb-2">
                  <h5 className="modal-title fs-4" id="exampleModalLabel">
                    Log in or sign up in seconds
                  </h5>
                </div>
                <p className="mb-0 fs-6 px-3 text-muted">
                  Use your email or another service to continue with Crafty
                  (it’s free)
                </p>
                <div className="offcanvas-body">
                  <div className="login_option">
                    <div className="login_option_single">
                      <div className="row align-items-center">
                        <div className="col-2 text-center">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            <img
                              src="assets/images/Icons/googleicon.png"
                              alt="googleicon"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="col-10">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            Continue with Google
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="login_option_single">
                      <div className="row">
                        <div className="col-2 text-center">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            <img
                              src="assets/images/Icons/fbicon.png"
                              alt="fbicon"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="col-9">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            Continue with Facebook
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ============== LOGIN WITH EMAIL =========== */}
                    <div
                      className="login_option_single close_offcanvas"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#login_with_email"
                    >
                      <div className="row">
                        <div className="col-2 text-center">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            <img
                              src="assets/images/Icons/mailicon.png"
                              className="img-fluid"
                              alt="mailicon"
                            />
                          </a>
                        </div>
                        <div className="col-9">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            Continue with email
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* ========= LOGIN WITH MOBILE NUMBER ========= */}
                    <div
                      className="login_option_single close_offcanvas"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#login_with_mobile"
                    >
                      <div className="row">
                        <div className="col-2 text-center">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            <img
                              src="assets/images/Icons/mobileicon.png"
                              className="img-fluid"
                              alt="mobileicon"
                            />
                          </a>
                        </div>
                        <div className="col-9">
                          <a
                            href="javacript:;"
                            className="text-decoration-none text-black"
                          >
                            Login with mobile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted small mb-0">
                    By continuing, you agree to Crafty Art Terms of Use. Read
                    our Privacy Policy.
                  </p>
                  <div className="other_login_option mt-2">
                    <div className="row">
                      <div className="col-2 text-center">
                        <a
                          href="javscript:;"
                          className="text-decoration-none text-black"
                        >
                          <img
                            src="assets/images/Icons/workeamilicon.png"
                            className="img-fluid"
                            alt="workemail"
                          />
                        </a>
                      </div>
                      <div className="col-9">
                        <a
                          href="javscript:;"
                          className="text-decoration-none text-black"
                        >
                          Sign up with your work email
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================ LOGIN WITH EMAIL OFFCANVAS FOR MOBILE SCREEN============== */}
              <div
                className="offcanvas offcanvas-bottom loginEmail_modal"
                tabIndex={-1}
                id="login_with_email"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-body">
                  <div className="register_header text-center">
                    <img
                      src="assets/images/Icons/carftlogo.svg"
                      className="modal_logo"
                      alt="carftylogo"
                    />
                    <h5 className="mb-0 text-black-50">Carfty Art</h5>
                    <h5 className="color_green1 fw-normal">Welcome Back!</h5>
                  </div>
                  <section className="pt-4 pb-0 mobileEmail_input">
                    <div className="form-area">
                      <div className="form-inner">
                        <form>
                          <div className="form-group">
                            <label htmlFor="s_email" className="text-muted">
                              Email Address
                            </label>
                            <input
                              type="s_email"
                              id="email"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label htmlFor="e_password" className="text-muted">
                              Password
                            </label>
                            <input
                              type="password"
                              id="e_password"
                              className="form-control"
                            />
                          </div>
                          <div className="mt-3">
                            <a
                              className="w-100 register_btn text-decoration-none"
                              href="javascript:;"
                              role="button"
                              data-bs-toggle="modal"
                              data-bs-target="#send_otp_modal"
                            >
                              Sign in
                            </a>
                          </div>
                          <div className="mt-2 text-end">
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-muted"
                            >
                              Forgot Password
                            </a>
                          </div>
                          <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
                            <p className="mb-0">Don't have an account?</p>
                            <a
                              className="text-decoration-none login_modal_open color_green1 btn"
                              data-bs-toggle="offcanvas"
                              href="#register_modal_mobile"
                              role="button"
                            >
                              Sign Up
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* =============== SEND OTP OFFCABNVAS FOR MOBILE VIEW =============== */}
              <div
                className="offcanvas offcanvas-bottom send_otp"
                tabIndex={-1}
                id="send_otp_offcanvas"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-body">
                  <div className="offcanvas-header text-center pt-0">
                    <h5
                      className="modal-title fs-5 color_green1 text-center w-100 fw-normal"
                      id="exampleModalLabel"
                    >
                      Enter your OTP
                    </h5>
                    <button
                      type="button"
                      className="close_button"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    />
                  </div>
                  <div className="modal-body">
                    <form action="" className="otp-form text-center">
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      <input
                        className="otp-field"
                        type="text"
                        name="opt-field[]"
                        maxLength={1}
                      />
                      {/* Store OTP Value */}
                      <input
                        className="otp-value"
                        type="hidden"
                        name="opt-value"
                      />
                    </form>
                    <div className="mt-4 text-center">
                      <p className="text-muted">
                        Resend Code in : <span>00:52</span>
                      </p>
                    </div>
                    <div className="verify_btn">
                      <a
                        className="w-100 register_btn text-decoration-none login_modal_open"
                        role="button"
                      >
                        Verify
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* ================ LOGIN WITH MOBILE OFFCANVAS FOR MOBILE SCREEN =========== */}
              <div
                className="offcanvas offcanvas-bottom loginMobile_modal "
                tabIndex={-1}
                id="login_with_mobile"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-body">
                  <div className="register_header text-center">
                    <img
                      src="assets/images/Icons/carftlogo.svg"
                      className="modal_logo"
                      alt="carftylogo"
                    />
                    <h5 className="mb-0 text-black-50">Carfty Art</h5>
                    <h5 className="color_green1 fw-normal">Welcome Back!</h5>
                  </div>
                  <section className="mobileNumber_input">
                    <div className="form-area">
                      <div className="form-inner">
                        <form>
                          <div className="form-group">
                            <label htmlFor="small_mobile_code" className="mb-2">
                              Mobile Number
                            </label>
                            <input
                              type="number"
                              id="small_mobile_code"
                              className="form-control"
                              placeholder="Phone Number"
                            />
                          </div>
                          <div className="mt-3">
                            <a
                              className="w-100 register_btn text-decoration-none login_modal_open"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#send_otp_offcanvas"
                              href="javascript:;"
                              role="button"
                            >
                              Send OTP
                            </a>
                          </div>
                          <div className="mt-3 text-center">
                            <p className="text-muted">
                              or use your email to sign in
                            </p>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <div
                              className="login_email_option me-3 close_offcanvas"
                              data-bs-toggle="offcanvas"
                              data-bs-target="#login_with_email"
                            >
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                <img
                                  src="assets/images/Icons/mailicon.png"
                                  className="img-fluid"
                                  alt="mailicon"
                                />
                              </a>
                            </div>
                            <div className="login_email_option">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                <img
                                  src="assets/images/Icons/googleicon.png"
                                  className="img-fluid"
                                  alt="googleicon"
                                />
                              </a>
                            </div>
                          </div>
                          <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
                            <p className="mb-0">Don't have an account?</p>
                            <a
                              className="text-decoration-none login_modal_open color_green1 ms-2 btn"
                              data-bs-toggle="offcanvas"
                              href="#register_modal_mobile"
                              role="button"
                            >
                              Sign Up
                            </a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            {/* ============== REGISTER SCREEN FOR MOBILE VIEW ======== */}
            <div className="login_register_modal login_modal d-block d-lg-none">
              <div
                className="offcanvas offcanvas-bottom register_modal"
                tabIndex={-1}
                id="register_modal_mobile"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-body">
                  <div className="register_header text-center">
                    <img
                      src="assets/images/Icons/carftlogo.svg"
                      className="modal_logo"
                    />
                    <h4 className="color_green1">Let's get Started</h4>
                  </div>
                  <div className="register_fields">
                    <div className="mb-2">
                      <label htmlFor="name" className="form-label mb-0">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control py-2"
                        id="name"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="email" className="form-label mb-0">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control py-2"
                        id="email"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="password" className="form-label mb-0">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control py-2"
                        id="password"
                      />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="c_password" className="form-label mb-0">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control py-2"
                        id="c_password"
                      />
                    </div>
                    <div className="signup_btn">
                      <a className="w-100 register_btn text-decoration-none" href="javascript:;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#send_otp_modal">
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/*======= LOGIN AND REGISTER MODAL SCREEN FOR DESKTOP ========= */}
            <div className="login_modal login_register_modal">
              {/* ====== LOGIN MODAL ========= */}
              <div
                className="modal fade"
                id="loginModal"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header border-bottom-0 pb-2 justify-content-center">
                      <h5 className="modal-title fs-4" id="exampleModalLabel">
                        Log in or sign up in seconds
                      </h5>
                    </div>
                    <p className="mb-0 fs-6 px-3 text-muted text-center w-75 mx-auto">
                      Use your email or another service to continue with Crafty (it’s
                      free)
                    </p>
                    <div className="modal-body pt-2">
                      <div className="login_option">
                        <div className="login_option_single">
                          <div className="row align-items-center">
                            <div className="col-2 text-center">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                <img
                                  src="assets/images/Icons/googleicon.png"
                                  className="img-fluid"
                                  alt="gooleicon"
                                />
                              </a>
                            </div>
                            <div className="col-10">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                Continue with Google
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="login_option_single">
                          <div className="row">
                            <div className="col-2 text-center">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                <img
                                  src="assets/images/Icons/fbicon.png"
                                  className="img-fluid"
                                  alt="fbicon"
                                />
                              </a>
                            </div>
                            <div className="col-9">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                Continue with Facebook
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* ============ LOGIN WITH EMAIL ============ */}
                        <div
                          className="login_option_single"
                          data-bs-toggle="modal"
                          data-bs-target="#loginEmail_modal"
                        >
                          <div className="row">
                            <div className="col-2 text-center">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                <img
                                  src="assets/images/Icons/mailicon.png"
                                  className="img-fluid"
                                  alt="mailicon"
                                />
                              </a>
                            </div>
                            <div className="col-9">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                Continue with email
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* ======= LOGIN WITH MOBILE ====== */}
                        <div
                          className="login_option_single"
                          data-bs-toggle="modal"
                          data-bs-target="#loginmobile_modal"
                        >
                          <div className="row">
                            <div className="col-2 text-center">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                <img
                                  src="assets/images/Icons/mobileicon.png"
                                  className="img-fluid"
                                  alt="mobileicon"
                                />
                              </a>
                            </div>
                            <div className="col-9">
                              <a
                                href="javascript:;"
                                className="text-decoration-none text-black"
                              >
                                Login with mobile
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted small mb-0">
                        By continuing, you agree to Crafty Art Terms of Use. Read our
                        Privacy Policy.
                      </p>
                    </div>
                    <div className="modal-bottom p-3 pt-0">
                      <div className="other_login_option">
                        <div className="row mx-1">
                          <div className="col-2 text-center">
                            <a
                              href="javacript:;"
                              className="text-decoration-none text-black"
                            >
                              <img
                                src="assets/images/Icons/workeamilicon.png"
                                className="img-fluid"
                                alt="workmailicon"
                              />
                            </a>
                          </div>
                          <div className="col-9">
                            <a
                              href="javacript:;"
                              className="text-decoration-none text-black"
                            >
                              Sign up with your work email
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
                        <p className="mb-0">Don't have an account?</p>
                        <button
                          className="btn color_green1"
                          data-bs-target="#register_modal"
                          data-bs-toggle="modal"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* ============= LOGIN WITH MOBILE MODAL FOR DESKTOP ============ */}
              <div
                className="modal fade loginMobile_modal"
                id="loginmobile_modal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="register_header text-center">
                        <img
                          src="assets/images/Icons/carftlogo.svg"
                          className="modal_logo"
                        />
                        <h5 className="mb-0 text-black-50">Carfty Art</h5>
                        <h5 className="color_green1 fw-normal">Welcome Back!</h5>
                      </div>
                      <section className="mobileNumber_input">
                        <div className="form-area">
                          <div className="form-inner">
                            <form>
                              <div className="form-group">
                                <label htmlFor="mobile_code" className="mb-2">
                                  Mobile Number
                                </label>
                                <input
                                  type="number"
                                  id="mobile_code"
                                  className="form-control"
                                  placeholder="Phone Number"
                                />
                              </div>
                              <div className="mt-3">
                                <a
                                  className="w-100 register_btn text-decoration-none login_modal_open"
                                  href="javascript:;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#send_otp_modal"
                                  role="button"
                                >
                                  Send OTP
                                </a>
                              </div>
                              <div className="mt-3 text-center">
                                <p className="text-muted">
                                  or use your email to sign in
                                </p>
                              </div>
                              <div className="d-flex justify-content-center align-items-center">
                                <div
                                  className="login_email_option me-3 close_offcanvas"
                                  data-bs-toggle="modal"
                                  data-bs-target="#loginEmail_modal"
                                >
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none text-black"
                                  >
                                    <img
                                      src="assets/images/Icons/mailicon.png"
                                      className="img-fluid"
                                      alt="mailicon"
                                    />
                                  </a>
                                </div>
                                <div className="login_email_option">
                                  <a
                                    href="javascript:;"
                                    className="text-decoration-none text-black"
                                  >
                                    <img
                                      src="assets/images/Icons/googleicon.png"
                                      className="img-fluid"
                                      alt="googleicon"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
                                <p className="mb-0">Don't have an account?</p>
                                <a
                                  className="btn color_green1"
                                  data-bs-toggle="modal"
                                  href="#register_modal"
                                  role="button"
                                >
                                  Sign Up
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              {/* ==================== SEND OTP MODAL FOR DESKTOP ===================== */}
              <div
                className="modal fade send_otp"
                id="send_otp_modal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <h5
                        className="modal-title fs-5 color_green1 text-center w-100 fw-normal"
                        id="exampleModalLabel"
                      >
                        Enter your OTP
                      </h5>
                      <button
                        type="button"
                        className="close_button"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <form action="" className="otp-form text-center">
                        <input
                          className="otp-field"
                          type="text"
                          name="opt-field[]"
                          maxLength={1}
                        />
                        <input
                          className="otp-field"
                          type="text"
                          name="opt-field[]"
                          maxLength={1}
                        />
                        <input
                          className="otp-field"
                          type="text"
                          name="opt-field[]"
                          maxLength={1}
                        />
                        <input
                          className="otp-field"
                          type="text"
                          name="opt-field[]"
                          maxLength={1}
                        />
                        <input
                          className="otp-field"
                          type="text"
                          name="opt-field[]"
                          maxLength={1}
                        />
                        <input
                          className="otp-field"
                          type="text"
                          name="opt-field[]"
                          maxLength={1}
                        />
                        {/* Store OTP Value */}
                        <input className="otp-value" type="hidden" name="opt-value" />
                      </form>
                      <div className="mt-4 text-center">
                        <p className="text-muted">
                          Resend Code in : <span>00:52</span>
                        </p>
                      </div>
                      <div className="verify_btn">
                        <a
                          className="w-100 register_btn text-decoration-none login_modal_open"
                          role="button"
                        >
                          Verify
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* =============== LOGIN WITH EMAIL MODAL FOR DESKTOP  ================ */}
              <div
                className="modal fade loginEmail_modal"
                id="loginEmail_modal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="register_header text-center">
                        <img
                          src="assets/images/Icons/carftlogo.svg"
                          className="modal_logo"
                          alt="carftylogo"
                        />
                        <h5 className="mb-0 text-black-50">Carfty Art</h5>
                        <h5 className="color_green1 fw-normal">Welcome Back!</h5>
                      </div>
                      <section className="mobileEmail_input">
                        <div className="form-area">
                          <div className="form-inner">
                            <form>
                              <div className="form-group">
                                <label htmlFor="email" className="text-muted">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  id="email"
                                  className="form-control"
                                />
                              </div>
                              <div className="form-group mt-3">
                                <label htmlFor="e_password" className="text-muted">
                                  Password
                                </label>
                                <input
                                  type="password"
                                  id="e_password"
                                  className="form-control"
                                />
                              </div>
                              <div className="mt-3">
                                <a
                                  className="w-100 register_btn text-decoration-none"
                                  href="javascript:;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#send_otp_modal"
                                  role="button"
                                >
                                  Sign in
                                </a>
                              </div>
                              <div className="mt-2 text-end">
                                <a
                                  href="javascript:;"
                                  className="text-decoration-none text-muted"
                                >
                                  Forgot Password
                                </a>
                              </div>
                              <div className="sign_up_link d-flex align-items-center justify-content-center mt-2">
                                <p className="mb-0">Don't have an account?</p>
                                <a
                                  className="btn color_green1"
                                  data-bs-toggle="modal"
                                  href="#register_modal"
                                  role="button"
                                >
                                  Sign Up
                                </a>
                              </div>
                            </form>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
              {/* ========== REGISTER MODAL ======== */}
              <div
                className="modal fade register_modal"
                id="register_modal"
                aria-hidden="true"
                aria-labelledby="exampleModalToggleLabel2"
                tabIndex={-1}
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-body py-2">
                      <div className="register_header text-center">
                        <img
                          src="assets/images/Icons/carftlogo.svg"
                          className="modal_logo"
                          alt="carftyicon"
                        />
                        <h4 className="color_green1">Let's get Started</h4>
                      </div>
                      <div className="register_fields">
                        <div className="mb-2">
                          <label htmlFor="name" className="form-label mb-0">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control py-2"
                            id="name"
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="email" className="form-label mb-0">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className="form-control py-2"
                            id="email"
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="password" className="form-label mb-0">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control py-2"
                            id="password"
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="c_password" className="form-label mb-0">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className="form-control py-2"
                            id="c_password"
                          />
                        </div>
                        <div className="signup_btn">
                          <a className="w-100 register_btn text-decoration-none" href="javascript:;"
                                  data-bs-toggle="modal"
                                  data-bs-target="#send_otp_modal">
                            Sign up
                          </a>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                          <p className="mb-0">Already have an account?</p>
                          <button
                            className="color_green1 btn"
                            data-bs-target="#loginModal"
                            data-bs-toggle="modal"
                          >
                            Sign in
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </> 
  )
}