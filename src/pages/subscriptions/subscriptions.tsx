import React from "react";

export default function Subscriptions() {
  return (
    <>
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
                        placeholder="1920"
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
                      placeholder="1080"
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
      {/* ========== SUBSCRIPTION TABS START ======= */}
      <section className="subscriptions-contact mb-4">
        {/* ================ PROFILE UPLOAD ===========*/}
        <div className="profile_upload bg-white">
          <div className="current-contact px-md-5 px-sm-4 px-2 w-100 mx-auto align-items-center">
            <div className="current-profile d-sm-flex align-items-center justify-content-center py-3">
              <div className="current-profile-logo text-center">
                <div className="avatar-upload">
                  <div className="avatar-preview mx-sm-0 mx-auto">
                    <div
                      id="imagePreview"
                      style={{
                        backgroundImage:
                          "url(assets/images/Icons/profile-icon.png)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="ps-md-5 ps-sm-3 ps-0 text-sm-start text-center">
                <h3>The file should be in PNG or JPG. Max size of 3 MB.</h3>
                <button
                  type="button"
                  className="btn btn-upload py-2 px-5 mt-sm-0 mt-3 position-relative"
                >
                  <div className="avatar-edit">
                    <input
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                    />
                    <label htmlFor="imageUpload"> Upload</label>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link py-3 active"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="true"
            >
              <i className="fa-solid fa-circle-user pe-2" />
              Profile
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link py-3"
              id="pills-subscriptons-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-subscriptons"
              type="button"
              role="tab"
              aria-controls="pills-subscriptons"
              aria-selected="false"
            >
              <i className="fa-regular fa-credit-card pe-2" />
              Subscription
            </button>
          </li>
        </ul>
        <div className="sm-container">
          <div
            className="tab-content container-sm-fluid mt-4"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade show active account_details_tab"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabIndex={0}
            >
              <div className="current-plan p-4">
                {/* =============== PROFILE PHOTO START ================ */}
                {/* <h3 class="section_heading_title text-center pt-4 pb-2 mb-0">Profile Photo</h3>
                  <div class="profile_upload">
                      <div class="row current-contact px-md-5 px-sm-4 px-2 w-100 mx-auto align-items-center">
                          <div class="col-sm-8">
                              <div class="current-profile d-sm-flex align-items-center">
                                  <div class="current-profile-logo text-center">
                                      <div class="avatar-upload">
                                          <div class="avatar-preview mx-sm-0 mx-auto">
                                              <div id="imagePreview" style="background-image: url(assets/images/Icons/profile-icon.png);">
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <h3 class="mb-0 ps-md-5 ps-sm-3 ps-0">The file should be in PNG or JPG. Max size of 3 MB.</h3>
                              </div>
                          </div>
                          <div class="col-sm-4 text-center">
                              <button type="button" class="btn btn-upload py-2 px-5 mt-sm-0 mt-3">
                                  <div class="avatar-edit">
                                      <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg" />
                                      <label for="imageUpload"> Upload</label>
                                  </div>
                              </button>
                          </div>
                      </div>
                  </div> */}
                {/* =============== ACCOUNT DETAILS START ================ */}
                <h3 className="section_heading_title text-center">
                  Account Details
                </h3>
                <div className="current-plan-card">
                  <div className="current-contact w-100 mx-auto align-items-center">
                    {/* ======== LARGE SCREEN ACCOUNT DETAILS =========== */}
                    <div className="current-profile d-none d-sm-block">
                      <div className="form-group mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Display name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Infiapp Solutions"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Infiapp Solutions"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email ID
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Infiappsolutions2022@gmail.com"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Phone number
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="123 456 7890"
                        />
                      </div>
                    </div>
                    {/* ======== SMALL SCREEN ACCOUNT DETAILS =========== */}
                    <div className="account_deatils d-block d-sm-none pb-4">
                      <div className="display_name border-bottom pb-4 mb-3">
                        <div className="form-group mb-3">
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="form-label"
                          >
                            Display name
                          </label>
                          <input
                            type="text"
                            className="form-control py-2"
                            id="exampleFormControlInput1"
                            placeholder="Infiapp Solutions"
                          />
                        </div>
                        <div className="d-flex justify-content-end">
                          <div className="displayname_btn me-2">
                            <a href="javscript:;" className="bg_grey">
                              Cancel
                            </a>
                          </div>
                          <div className="displayname_btn">
                            <a
                              href="javscript:;"
                              className="bg_light_green text-white"
                            >
                              Save
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3 border-bottom pb-4">
                        <label htmlFor="userName" className="form-label">
                          Username
                        </label>
                        <div className="d-flex align-items-center justify-content-between">
                          <input
                            type="text"
                            className="form-control border-0"
                            id="userName"
                            placeholder="Infiapp Solutions"
                            readOnly
                          />
                          <div className="displayname_btn me-2">
                            <a href="javscript:;" className="bg_grey">
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3 border-bottom pb-4">
                        <label htmlFor="userName" className="form-label">
                          Email ID
                        </label>
                        <div className="d-flex align-items-center justify-content-between">
                          <input
                            type="email"
                            className="form-control border-0"
                            id="userName"
                            placeholder="Infiappsolutions@gmail.coms"
                            readOnly
                          />
                          <div className="displayname_btn me-2">
                            <a href="javscript:;" className="bg_grey">
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mb-3 border-bottom pb-4">
                        <label htmlFor="userName" className="form-label">
                          Phone Number
                        </label>
                        <div className="d-flex align-items-center justify-content-between">
                          <input
                            type="number"
                            className="form-control border-0"
                            id="userName"
                            placeholder="123 456 7890"
                            readOnly
                          />
                          <div className="displayname_btn me-2">
                            <a href="javscript:;" className="bg_grey">
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="update_profile_btn">
                        <a className="w-100 register_btn text-decoration-none text-white">
                          Update Profile
                        </a>
                      </div>
                    </div>
                    <div className="current-profile text-center d-none d-sm-block">
                      {/* <p class="comman_para">Manage your display name, username and email id withCrafty..</p> */}
                      <button
                        type="button"
                        className="btn register_btn text-white w-100"
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade current_plan_tab"
              id="pills-subscriptons"
              role="tabpanel"
              aria-labelledby="pills-subscriptons-tab"
              tabIndex={0}
            >
              {/* =============== CURRENT PLAN START ================ */}
              <div className="current-plan d-sm-block d-none">
                <h3 className="section_heading_title text-center pt-4 pb-3 mb-0">
                  My Current Plan
                </h3>
                <div className="current-plan-card">
                  <div className="row current-contact px-3 pb-3 border-bottom w-100 mx-auto align-items-center">
                    <div className="col-md-9 text-md-start text-center">
                      <div className="logo-image mb-4">
                        <img
                          src="assets/images/Icons/craftyart_logo.png"
                          alt="carftylogo"
                        />
                      </div>
                      <h3 className="section_title mb-4">
                        Premium yearly plan
                      </h3>
                      <p className="comman_para mb-3 mx-auto mx-md-0">
                        Now including the 100+ million premium template, photo,
                        greeting, and graphics
                      </p>
                    </div>
                    <div className="col-md-3 text-center">
                      <h3 className="section_heading_title mb-4">1255 INR</h3>
                      <a
                        href="javascript:;"
                        className="btn register_btn text-white"
                      >
                        Active
                      </a>
                    </div>
                  </div>
                  <div className="row current-contact px-3 py-3 w-100 mx-auto align-items-center">
                    <div className="col-md-9 text-md-start text-center">
                      <h3 className="section_title mb-md-0 mb-3">
                        01-12-2022 <span>Next Billing Date</span>
                      </h3>
                    </div>
                    <div className="col-md-3 text-center">
                      <h3 className="section_title mb-0">
                        {" "}
                        341 <span>Days Left</span>
                      </h3>
                    </div>
                  </div>
                </div>
                {/* =============== INVOICES ================ */}
                <h3 className="section_heading_title text-center pt-4 pb-2 mb-0">
                  Invoices
                </h3>
                <div className="current-plan-card p-4">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className="text-center">
                        <tr>
                          <th scope="col" style={{ width: 200 }}>
                            Product
                          </th>
                          <th scope="col" style={{ width: 200 }}>
                            Reference
                          </th>
                          <th scope="col" style={{ width: 180 }}>
                            Date
                          </th>
                          <th scope="col" style={{ width: 180 }}>
                            Amount
                          </th>
                          <th scope="col" style={{ width: 180 }}>
                            Status
                          </th>
                          <th scope="col" style={{ width: 200 }}>
                            Download
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr>
                          <td scope="row">
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              Crafty Art Premium{" "}
                            </a>
                          </td>
                          <td>
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              INV-CA-2022-209905{" "}
                            </a>
                          </td>
                          <td>
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              14-11-2022
                            </a>
                          </td>
                          <td>
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              1255 INR
                            </a>
                          </td>
                          <td>
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              <i className="fa-solid fa-check" />
                            </a>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="btn btn-download text-white"
                            >
                              {" "}
                              Download
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td scope="row">
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              Crafty Art Premium{" "}
                            </a>
                          </td>
                          <td>
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              INV-CA-2022-209905{" "}
                            </a>
                          </td>
                          <td>
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              14-11-2022
                            </a>
                          </td>
                          <td>
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              1255 INR
                            </a>
                          </td>
                          <td>
                            <a
                              href="javascript:;"
                              className="text-decoration-none text-dark text-center"
                            >
                              <i className="fa-solid fa-check" />
                            </a>
                          </td>
                          <td>
                            <a
                              href="invoice.html"
                              className="btn btn-download text-white"
                            >
                              {" "}
                              Download
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* ==========CURRENT-PLAN-INNER START ================ */}
              <div className="current-plan-inner d-sm-none d-block px-4">
                <h3 className="section_heading_title text-center py-4 mb-0">
                  My Current Plan
                </h3>
                <div className="current-inner">
                  <h3 className="mb-3 title">
                    <i className="fa-solid fa-crown text-warning pe-2" />
                    Plan
                  </h3>
                  <div className="card-price d-flex justify-content-between align-items-center mb-3 ">
                    <h4 className="mb-0 ">
                      <span className="section_heading_title">₹1255</span>{" "}
                      <span className="section-text">/month</span>
                    </h4>
                    <div className="card-price-inner">
                      <p className="mb-0">Expires on</p>
                      <span>
                        6<sup>th</sup> Dec, 2023
                      </span>
                    </div>
                  </div>
                  <div className="card-view d-flex justify-content-between align-items-center">
                    <button type="button" className="btn btn-renew ">
                      Renew
                    </button>
                    <button
                      type="button"
                      className="btn btn-view"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      View Plan
                    </button>
                  </div>
                </div>
                {/* =========== VIEW PLAN MODAL ========= */}
                <div
                  className="modal fade view_plan_modal"
                  id="exampleModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header border-bottom-0 pb-0">
                        <div className="modal_heading">
                          <h5
                            className="modal-title fs-3"
                            id="exampleModalLabel"
                          >
                            Silver
                          </h5>
                        </div>
                        <div className="modal_close_btn">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                      </div>
                      <p className="mb-0 fs-5 px-3">Best for professionals</p>
                      <div className="modal-body p-0">
                        <div className="p-3 border-bottom">
                          <div className="plan_price_details">
                            <span className="fs-1 pe-2 fw-bold">299</span>
                            <span className="fw-bold">INR /per 1 month</span>
                          </div>
                          <div className="plan_info pt-4">
                            <div className="row text-center">
                              <div className="col-4 plan_innfo_inner ps-0">
                                <p className="mb-0 text-muted">Starting Date</p>
                                <h6>06 Dec,2022</h6>
                              </div>
                              <div className="col-4 plan_innfo_inner ps-0">
                                <p className="mb-0 text-muted">Timing</p>
                                <h6>06 Dec,2022</h6>
                              </div>
                              <div className="col-4 plan_innfo_inner ps-0">
                                <p className="mb-0 text-muted">Expire Date</p>
                                <h6>06 Dec,2022</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card_description p-3">
                          <h3 className="fs-4">
                            Everything Crafty Free has, plus:
                          </h3>
                          <div className="plan_list">
                            <ul className="list-unstyled">
                              <li className="py-1 position-relative">
                                <span>You won't be charged today </span>
                              </li>
                              <li className="py-1 position-relative">
                                <span>
                                  Paid subscription starts on November 12, 2022{" "}
                                </span>
                              </li>
                              <li className="py-1 position-relative">
                                <span>Pay once upfront. No auto-renew. </span>
                              </li>
                              <li className="py-1 position-relative">
                                <span>Top up whenever you want. </span>
                              </li>
                              <li className="py-1 position-relative">
                                <span>
                                  You can cancel the premium anytime in your
                                  account settings{" "}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                          </div> */}
                    </div>
                  </div>
                </div>
                <h3 className="section_heading_title text-center py-4 mb-0">
                  Invoice
                </h3>
                {/* ====== ACCORDION CONTACT STSRT=============== */}
                <div className="accordion-contact">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <div
                        className="accordion-header d-flex justify-content-between align-items-center"
                        id="headingOne"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <p className="mb-0">
                          <i className="fa-solid fa-crown text-warning pe-2" />
                          Silver Plan
                        </p>
                        <p className="mb-0">
                          ₹1255 <span className="section-text">/month</span>
                        </p>
                      </div>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample1"
                      >
                        <div className="accordion-body px-4">
                          <div className="d-flex border-bottom justify-content-between align-items-center pb-2">
                            <p className="mb-0">
                              <strong>Date :</strong> 18 Nov, 2022
                            </p>
                            <p className="mb-0">
                              <strong>Amount :</strong> ₹1255
                            </p>
                          </div>
                          <div className="py-3">
                            <p className="mb-2">
                              <strong>Invoice Number:</strong>{" "}
                              INV-CA-2022-1226320
                            </p>
                            <p className="mb-2">
                              <strong>Status:</strong>Approve
                            </p>
                          </div>
                          <button
                            type="button"
                            className="btn invoice-btn my-3"
                          >
                            Download Invoice
                          </button>
                        </div>
                      </div>
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      ></button>
                    </div>
                    <div className="accordion-item">
                      <div
                        className="accordion-header d-flex justify-content-between align-items-center"
                        id="headingTwo"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <p className="mb-0">
                          <i className="fa-solid fa-crown text-warning pe-2" />
                          Gold Plan
                        </p>
                        <p className="mb-0">
                          ₹2149 <span className="section-text">/2 Year</span>
                        </p>
                      </div>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body px-4">
                          <div className="d-flex border-bottom justify-content-between align-items-center pb-2">
                            <p className="mb-0">
                              <strong>Date :</strong> 18 Nov, 2022
                            </p>
                            <p className="mb-0">
                              <strong>Amount :</strong> ₹1255
                            </p>
                          </div>
                          <div className="py-3">
                            <p className="mb-2">
                              <strong>Invoice Number:</strong>{" "}
                              INV-CA-2022-1226320
                            </p>
                            <p className="mb-2">
                              <strong>Status:</strong>Approve
                            </p>
                          </div>
                          <button
                            type="button"
                            className="btn invoice-btn my-3"
                          >
                            Download Invoice
                          </button>
                        </div>
                      </div>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
