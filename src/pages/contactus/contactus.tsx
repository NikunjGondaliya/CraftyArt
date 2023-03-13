import React from 'react'

export default function ContactUs() {
  return (
    <>
  {/* =============== SMALL SCREEEN BOTTOM ============ */}
  <div className="small_fixed_footer d-bock d-sm-none">
    <div className="small_screen_footer_link position-relative">
      <div className="d-flex justify-content-between">
        <div className="bottom_footer_link">
          <a
            href="index.html"
            className="d-flex flex-column align-items-center text-decoration-none active"
          >
            <i className="fa-sharp fa-solid fa-house fs-5" />
            <span>Home</span>
          </a>
        </div>
        <div className="bottom_footer_link">
          <a
            href="javscript:;"
            className="d-flex flex-column align-items-center text-decoration-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#creation_bottom"
          >
            <i className="fa-sharp fa-solid fa-folder fs-5" />
            <span>Creation</span>
          </a>
        </div>
        <div className="bottom_footer_link">
          <a
            href="price&plan.html"
            className="d-flex flex-column align-items-center text-decoration-none"
          >
            <i className="fa-sharp fa-solid fa-crown fs-5" />
            <span>Premium</span>
          </a>
        </div>
        <div className="bottom_footer_link">
          <a
            href="javscript:;"
            className="d-flex flex-column align-items-center text-decoration-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#profile_bottom"
          >
            <i className="fa-sharp fa-solid fa-circle-user fs-5" />
            <span>Profile</span>
          </a>
        </div>
      </div>
      <div className="bottom_footer_pluse">
        <a
          href="javscript:;"
          className="text-decoration-none text-white fs-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#custom_size"
        >
          <i className="fa-sharp fa-solid fa-plus fs-2" />
        </a>
      </div>
    </div>
    {/* ======= PROFILE OFFCANVAS ========= */}
    <div
      className="profile_offcanvas offcanvas offcanvas-bottom"
      tabIndex={-1}
      id="profile_bottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title text-center w-100"
          id="offcanvasBottomLabel"
        >
          Account
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div className="profile_offcanvas_inner">
          <div className="profile_single_item d-flex align-items-start mb-4">
            <div className="single_item_icon pe-3">
              <img
                src="assets/images/Icons/accountuser.png"
                alt="usericon"
                className="img-fluid"
              />
            </div>
            <div className="single_items_text border-bottom w-100 pb-4">
              <h6 className="mb-2 fw-bold">Profile</h6>
              <p className="mb-0 text-muted fw-normal">
                Edit photo, display name, user name, email id
              </p>
            </div>
          </div>
          <div className="profile_single_item d-flex align-items-start mb-4">
            <div className="single_item_icon pe-3">
              <img
                src="assets/images/Icons/subscription.png"
                alt="usericon"
                className="img-fluid"
              />
            </div>
            <div className="single_items_text border-bottom w-100 pb-4">
              <h6 className="mb-2 fw-bold">Subscriptions</h6>
              <p className="mb-0 text-muted fw-normal">
                View current plan, download your invoice pdf
              </p>
            </div>
          </div>
          <div className="profile_single_item d-flex align-items-start mb-4">
            <div className="single_item_icon pe-3">
              <img
                src="assets/images/Icons/referuser.png"
                alt="usericon"
                className="img-fluid"
              />
            </div>
            <div className="single_items_text border-bottom w-100 pb-4">
              <h6 className="mb-2 fw-bold">Refer Friends</h6>
              <p className="mb-0 text-muted fw-normal">
                Easily refer and share your templates with friends
              </p>
            </div>
          </div>
          <div className="profile_single_item d-flex align-items-start mb-4">
            <div className="single_item_icon pe-3">
              <img
                src="assets/images/Icons/help.png"
                alt="usericon"
                className="img-fluid"
              />
            </div>
            <div className="single_items_text border-bottom w-100 pb-4">
              <h6 className="mb-2 fw-bold">Get Support</h6>
              <p className="mb-0 text-muted fw-normal">
                24/7 any issue instant support
              </p>
            </div>
          </div>
          <div className="profile_single_item d-flex align-items-start mb-4">
            <div className="single_item_icon pe-3">
              <img
                src="assets/images/Icons/file.png"
                alt="usericon"
                className="img-fluid"
              />
            </div>
            <div className="single_items_text border-bottom w-100 pb-4">
              <h6 className="mb-2 fw-bold">My Creation</h6>
              <p className="mb-0 text-muted fw-normal">
                View your last create design tempate
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-footer p-3">
        <a
          className="w-100 register_btn text-decoration-none"
          href="javacript:;"
        >
          Logout
        </a>
      </div>
    </div>
    {/* ======= CREATION OFFCANVAS ========= */}
    <div
      className="profile_offcanvas creation_offcanvas offcanvas offcanvas-bottom"
      tabIndex={-1}
      id="creation_bottom"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title text-center w-100"
          id="offcanvasBottomLabel"
        >
          Creation
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <div className="creation_offcanvas_inner template_design">
          <div className="row">
            <div className="col-6 mb-3">
              <div className="position-relative">
                <div className="gallery_img">
                  <a href="javascript:;">
                    <img
                      src="assets/images/latest Template/LT-3.png"
                      className="img-fluid w-100"
                      alt="template"
                    />
                  </a>
                </div>
                <div className="gallery_menu">
                  <a href="javascript:;" className="gallery_menu_icon">
                    <i className="fa-sharp fa-solid fa-ellipsis" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="position-relative">
                <div className="gallery_img">
                  <a href="javascript:;">
                    <img
                      src="assets/images/latest Template/LT-5.png"
                      className="img-fluid w-100"
                      alt="template"
                    />
                  </a>
                </div>
                <div className="gallery_menu">
                  <a href="javascript:;" className="gallery_menu_icon">
                    <i className="fa-sharp fa-solid fa-ellipsis" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="position-relative">
                <div className="gallery_img">
                  <a href="javascript:;">
                    <img
                      src="assets/images/latest Template/LT-4.png"
                      className="img-fluid w-100"
                      alt="template"
                    />
                  </a>
                </div>
                <div className="gallery_menu">
                  <a href="javascript:;" className="gallery_menu_icon">
                    <i className="fa-sharp fa-solid fa-ellipsis" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 mb-3">
              <div className="position-relative">
                <div className="gallery_img">
                  <a href="javascript:;">
                    <img
                      src="assets/images/insta story/IS-3.png"
                      className="img-fluid w-100"
                      alt="template"
                    />
                  </a>
                </div>
                <div className="gallery_menu">
                  <a href="javascript:;" className="gallery_menu_icon">
                    <i className="fa-sharp fa-solid fa-ellipsis" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* ============ CUSTOM SIZE OFFCANVAS ================= */}
    <div
      className="custom_size_offcanvas offcanvas offcanvas-bottom custom_size_dropdown h-auto"
      tabIndex={-1}
      id="custom_size"
      aria-labelledby="offcanvasBottomLabel"
    >
      <div className="offcanvas-header">
        <h5
          className="offcanvas-title text-center w-100"
          id="offcanvasBottomLabel"
        >
          Custom Size
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <form>
          <div className="d-flex justify-content-between align-items-center">
            <div className="pe-2 input_single_data">
              <label htmlFor="width" className="form-label mb-0">
                Width
              </label>
              <div className="d-flex align-items-center">
                <div className="border_shadow d-flex align-items-center me-2 px-1 rounded-1">
                  <i className="fa-sharp fa-solid fa-arrows-left-right" />
                  <input
                    type="number"
                    className="form-control border-0"
                    id="width"
                    placeholder={"1920"}
                  />
                </div>
                <img
                  src="assets/images/Icons/Lock.png"
                  alt="lock"
                  className="img-fluid lock_icon"
                  style={{ maxHeight: 20 }}
                />
              </div>
            </div>
            <div className="pe-2 input_single_data">
              <label htmlFor="height" className="form-label mb-0">
                Height
              </label>
              <div className="d-flex border_shadow align-items-center me-2 px-1 rounded-1">
                <i className="fa-sharp fa-solid fa-arrows-up-down" />
                <input
                  type="number"
                  className="form-control border-0"
                  id="height"
                  placeholder={"1080"}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="height" className="form-label opacity-0">
                Units
              </label>
              <select id="units">
                <option selected={true}>PX</option>
                <option value={1}>CM</option>
                <option value={2}>INCH</option>
                <option value={3}>MM</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="offcanvas-footer p-3">
        <a
          className="w-100 register_btn text-decoration-none"
          href="javascript:;"
        >
          Create New page
        </a>
      </div>
    </div>
  </div>
  {/* ============= CONTACT US HERO ======== */}
  <div className="contactus_hero">
    <div className="contactus_inner">
      <h1 className="mb-4 main_heading">How Can We Help You?</h1>
      <div className="search_input d-flex align-items-center">
        <input
          type="search"
          placeholder="Search thousands of templates"
          className="border-0 bg-transparent w-100 h-100"
        />
        {/* <i class="fa-solid fa-magnifying-glass color_green1 fs-5"></i> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          viewBox="0 0 24 24"
        >
          <path
            fill="red"
            d="M15.2 16.34a7.5 7.5 0 1 1 1.38-1.45l4.2 4.2a1 1 0 1 1-1.42 1.41l-4.16-4.16zm-4.7.16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
          />
        </svg>
      </div>
      <p className="mt-3 fw-bold">
        Popular topics: subscription, account, payment, policy, history
      </p>
    </div>
  </div>
  {/* ========= CONTACT US SECTION ========= */}
  <section className="contact_us enhance-process mt-3">
    <div className="container enhance-process-inner">
      <div className="row">
        <div className="col-lg-3 col-sm-6 mb-3">
          <a
            href="javacript:;"
            className="enhance-process-card text-center text-decoration-none d-inline-block"
          >
            <div className="enhance-card-image mb-3">
              <img
                src="assets/images/Icons/start.png"
                alt="start"
                className="img-fluid"
              />
            </div>
            <h3 className="contactus_title">Get Started</h3>
            <p className="mb-0 comman_para">
              Step by step tutorials to help you get started
            </p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <a
            href="javscript:;"
            className="enhance-process-card text-center text-decoration-none d-inline-block"
          >
            <div className="enhance-card-image mb-3">
              <img
                src="assets/images/Icons/user.png"
                alt="icon"
                className="img-fluid"
              />
            </div>
            <h3 className="contactus_title">Account Settings</h3>
            <p className="mb-0 comman_para">
              Answer to the question about changing email, password and deleting
              your account
            </p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <a
            href="javscript:;"
            className="enhance-process-card text-center text-decoration-none d-inline-block"
          >
            <div className="enhance-card-image mb-3">
              <img
                src="assets/images/Icons/contact.png"
                alt="contact"
                className="img-fluid"
              />
            </div>
            <h3 className="contactus_title">Contact us</h3>
            <p className="mb-0 comman_para">
              Need quick help? Dont Worry We are here to help!
            </p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <a className="enhance-process-card text-center text-decoration-none d-inline-block">
            <div className="enhance-card-image mb-3">
              <img
                src="assets/images/Icons/editing.png"
                alt="editing"
                className="img-fluid"
              />
            </div>
            <h3 className="contactus_title">Editing and designing</h3>
            <p className="mb-0 comman_para">
              Includes images, videos, text, managing design and folders
            </p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <a
            href="javscript:;"
            className="enhance-process-card text-center text-decoration-none d-inline-block"
          >
            <div className="enhance-card-image mb-3">
              <img
                src="assets/images/Icons/Downloads.png"
                alt="download"
                className="img-fluid"
              />
            </div>
            <h3 className="contactus_title">Downloading, Saving and Sharing</h3>
            <p className="mb-0 comman_para">
              Tips for downloading, saving and sharing your works
            </p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <a
            href="javascript:;"
            className="enhance-process-card text-center text-decoration-none d-inline-block"
          >
            <div className="enhance-card-image mb-3">
              <img
                src="assets/images/Icons/payment.png"
                alt="payment"
                className="img-fluid"
              />
            </div>
            <h3 className="contactus_title">Subscriptions &amp; Payment</h3>
            <p className="mb-0 comman_para">
              Answer to Crafty Art subscriptions and payment errors
            </p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <a
            className="enhance-process-card text-center d-inline-block text-decoration-none"
            href="term&condition.html"
          >
            <div className="enhance-card-image mb-3">
              <img
                src="assets/images/Icons/t&c.png"
                alt="t&c"
                className="img-fluid"
              />
            </div>
            <h3 className="contactus_title">Terms and Conditions</h3>
            <p className="mb-0 comman_para">
              Include the Graphic Content and Template for commercial use
            </p>
          </a>
        </div>
        <div className="col-lg-3 col-sm-6 mb-3">
          <a
            className="enhance-process-card text-center text-decoration-none d-inline-block"
            href="term&condition.html"
          >
            <div className="enhance-card-image mb-3">
              <img
                src="assets/images/Icons/privacy.png"
                alt="privacy"
                className="img-fluid"
              />
            </div>
            <h3 className="contactus_title">Privacy Policy</h3>
            <p className="mb-0 comman_para">
              Our policies ensure you have a safe and professional experience on
              crafty art
            </p>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* ========= FAQ SECTION ============ */}
  <div className="faq_main my-4 py-3">
    <div className="container">
      <div className="faq_inner">
        <h5 className="text-center faq_title">FAQ</h5>
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
                  How do I make a Crafty Art Instagram post?
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
                    Crafty Art offers a variety of tools to help you create
                    Instagram posts. To start, select the Instagram Post option
                    from the main page and choose one of the premade templates.
                    You can then add your own images, text, and design elements
                    to customise the post. When you’re finished, click "Save,"
                    and your Instagram post will be ready to share.
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
                  How do I create an Instagram (landscape) post using Crafty
                  Art?
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
                    To create a landscape Instagram post, select the Instagram
                    Post option from the main page and choose one of the premade
                    templates. Then, click "Edit" and select the landscape
                    option from the top of the page. You can then add your own
                    images, text, and design elements to customise the post.
                    When you’re finished, click "Save," and your Instagram post
                    will be ready to share.
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
                  How do I create a Facebook (landscape) post using Crafty Art?
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
                    To create a landscape Facebook post, select the Facebook
                    Post option from the main page and choose one of the premade
                    templates. Then, click "Edit" and select the landscape
                    option from the top of the page. You can then add your own
                    images, text, and design elements to customise the post.
                    When you’re finished, click "Save," and your Facebook post
                    will be ready to share.
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
                  How do I create an invitation (a portrait) using Crafty Art?
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
                    To create a portrait invitation, select the Invitation
                    option from the main page and choose one of the premade
                    templates. Then, click "Edit" and select the portrait option
                    from the top of the page. You can then add your own images,
                    text, and design elements to customise the post. When you’re
                    finished, click "Save," and your invitation will be ready to
                    share.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                  aria-expanded="false"
                  aria-controls="faq5"
                >
                  How do I create certificates using Crafty Art?
                </button>
              </h2>
              <div
                id="faq5"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <p className="mb-0">
                    To create certificates with Crafty Art, select the
                    Certificates option from the main page and choose one of the
                    premade templates. You can then add your own images, text,
                    and design elements to customise the post. When you’re
                    finished, click "Save," and your certificate will be ready
                    to share.
                  </p>
                </div>
              </div>
            </div>
            <div className="more_accordion_items">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq6"
                    aria-expanded="false"
                    aria-controls="faq6"
                  >
                    Does Crafty Art offer a free online logo maker?
                  </button>
                </h2>
                <div
                  id="faq6"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      Yes, Crafty Art offers a free online logo maker. To access
                      it, select the Logo Maker option from the main page and
                      choose one of the premade templates. You can then add your
                      own images, text, and design elements to customise the
                      post. When you’re finished, click "Save," and your logo
                      will be ready to download.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq7"
                    aria-expanded="false"
                    aria-controls="faq7"
                  >
                    Is there a free online logo maker I can download with Crafty
                    Art?
                  </button>
                </h2>
                <div
                  id="faq7"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      Yes, Crafty Art offers a free online logo maker and
                      download. To access it, select the Logo Maker option from
                      the main page and choose one of the premade templates. You
                      can then add your own images, text, and design elements to
                      customise the post. When you’re finished, click "Save,"
                      and your logo will be ready to download.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq8"
                    aria-expanded="false"
                    aria-controls="faq8"
                  >
                    Is there a thumbnail maker without a watermark in Crafty
                    Art?
                  </button>
                </h2>
                <div
                  id="faq8"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      Yes, Crafty Art offers a thumbnail maker without a
                      watermark. To access it, select the Thumbnail Maker option
                      from the main page and choose one of the premade
                      templates. You can then add your own images, text, and
                      design elements to customise the post. When you’re
                      finished, click "Save," and your thumbnail will be ready
                      to share.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq9"
                    aria-expanded="false"
                    aria-controls="faq9"
                  >
                    Is there an Instagram story maker online with Crafty Art?
                  </button>
                </h2>
                <div
                  id="faq9"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      Yes, Crafty Art offers an Instagram story maker online. To
                      access it, select the Instagram Story Maker option from
                      the main page and choose one of the premade templates. You
                      can then add your own images, text, and design elements to
                      customise the post. When you’re finished, click "Save,"
                      and your Instagram story will be ready to share.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq10"
                    aria-expanded="false"
                    aria-controls="faq10"
                  >
                    Is there a free resume maker online with Crafty Art?
                  </button>
                </h2>
                <div
                  id="faq10"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      Yes, Crafty Art offers a resume maker online for free. To
                      access it, select the Resume Maker option from the main
                      page and choose one of the premade templates. You can then
                      add your own images, text, and design elements to
                      customise the post. When you’re finished, click "Save,"
                      and your resume will be ready to share.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq11"
                    aria-expanded="false"
                    aria-controls="faq11"
                  >
                    Is there a festival poster maker with Crafty Art?
                  </button>
                </h2>
                <div
                  id="faq11"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      Yes, Crafty Art offers a festival poster maker. To access
                      it, select the Festival Poster Maker option from the main
                      page and choose one of the premade templates. You can then
                      add your own images, text, and design elements to
                      customise the post. When you’re finished, click "Save,"
                      and your festival poster will be ready to share.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq12"
                    aria-expanded="false"
                    aria-controls="faq12"
                  >
                    Is there a free logo maker online and a free download with
                    Crafty Art?
                  </button>
                </h2>
                <div
                  id="faq12"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      Yes, Crafty Art offers a free logo maker online and a free
                      download. To access it, select the Logo Maker option from
                      the main page and choose one of the premade templates. You
                      can then add your own images, text, and design elements to
                      customise the post. When you’re finished, click "Save,"
                      and your logo will be ready to download.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq13"
                    aria-expanded="false"
                    aria-controls="faq13"
                  >
                    What is a free background remover?
                  </button>
                </h2>
                <div
                  id="faq13"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      A free background remover is a type of image editing
                      software that can be used to remove the background from an
                      image. This can be useful for a variety of purposes, such
                      as creating a transparent background for an image or
                      creating a new background for a picture. There are a
                      variety of free background removers available online.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq14"
                    aria-expanded="false"
                    aria-controls="faq14"
                  >
                    How do I get started using an online graphic design tool?
                  </button>
                </h2>
                <div
                  id="faq14"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      To get started using an online graphic design tool, you
                      will first need to choose a tool like Crafty Art that
                      meets your needs. You may want to research the different
                      features offered by various tools, and read reviews from
                      other users to find the best one for you. Once you have
                      chosen a graphic design tool, you can create an account
                      and start designing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq15"
                    aria-expanded="false"
                    aria-controls="faq15"
                  >
                    What kind of designs can I create with an online graphic
                    design tool?
                  </button>
                </h2>
                <div
                  id="faq15"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p className="mb-0">
                      {" "}
                      You can create a variety of graphics with an online
                      graphic design tool, such as advertisements, logos,
                      business cards, posters, and more. You can also create
                      vector illustrations and edit photos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq16"
                    aria-expanded="false"
                    aria-controls="faq16"
                  >
                    What are the Top Online Graphic Design Tool?
                  </button>
                </h2>
                <div
                  id="faq16"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ol>
                      <li>Canva</li>
                      <li>Crafty Art</li>
                      <li>Gravit Designer</li>
                      <li>Adobe Illustrator</li>
                      <li>Sketch</li>
                      <li>Pixlr</li>
                      <li>Inkscape</li>
                      <li> GIMP</li>
                      <li>CorelDRAW</li>
                      <li> Adobe InDesign</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-3">
          <a
            className="register_btn text-decoration-none d-inline-block px-4 fs-6 rounded-3 viewmoreless_button"
            href="javascript:;"
          >
            View more
          </a>
        </div>
      </div>
    </div>
  </div>
</>
)
}
