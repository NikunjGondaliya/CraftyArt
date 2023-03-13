import React from 'react'

export default function AllTemplate() {
  return (
    <>
  {/* ========================= FOOTER ========================= */}
  {/* ================ HIGHLIGHT WORK =============== */}
  <section className="highlight_work bg-dark text-white py-5">
    <div className="container-fluid">
      <div className="highlight_wotk_title pb-5 px-4 text-center">
        <h5 className="section_heading_title m-0 text-white">
          Helping you highlight what’s remarkable about your business
        </h5>
      </div>
      {/* ========= LARGE SCREEN HIGHLIGHT TAB ======= */}
      <div className="highlight_tab container d-none d-sm-block">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link active"
              id="social_media_tab"
              data-bs-toggle="pill"
              data-bs-target="#social_media"
              type="button"
              role="tab"
              aria-controls="social_media"
              aria-selected="true"
            >
              Social Media
            </button>
          </li>
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link"
              id="certificate_tab"
              data-bs-toggle="pill"
              data-bs-target="#certificate"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Certificate
            </button>
          </li>
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link"
              id="quotes_tab"
              data-bs-toggle="pill"
              data-bs-target="#quotes"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Quotes
            </button>
          </li>
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link"
              id="instagram_tab"
              data-bs-toggle="pill"
              data-bs-target="#instagram"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Instagram
            </button>
          </li>
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link"
              id="logo_tab"
              data-bs-toggle="pill"
              data-bs-target="#logo"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Logo
            </button>
          </li>
          <li className="nav-item mb-3" role="presentation">
            <button
              className="nav-link"
              id="trending_tab"
              data-bs-toggle="pill"
              data-bs-target="#trending"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Trending
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="social_media"
            role="tabpanel"
            aria-labelledby="social_media_tab"
            tabIndex={0}
          >
            <div className="highlight_single_tab">
              <div className="owl-carousel highlight_swiper">
                <div className="highlight_smallcard">
                  <div className="highlight_smallcard_img">
                    <img src="assets/images/Footer/1.png" alt="footerimg" />
                  </div>
                  <div className="highlight_smallcard_text text-center mt-2">
                    <h6>
                      Facebook <br />
                      Portrait
                    </h6>
                  </div>
                </div>
                <div className="highlight_smallcard">
                  <div className="highlight_smallcard_img">
                    <img src="assets/images/Footer/2.png" alt="footerimg" />
                  </div>
                  <div className="highlight_smallcard_text text-center mt-2">
                    <h6>
                      Instagram <br />
                      Portrait
                    </h6>
                  </div>
                </div>
                <div className="highlight_smallcard">
                  <div className="highlight_smallcard_img">
                    <img src="assets/images/Footer/3.png" alt="footerimg" />
                  </div>
                  <div className="highlight_smallcard_text text-center mt-2">
                    <h6>
                      Instagram <br />
                      Story
                    </h6>
                  </div>
                </div>
                <div className="highlight_smallcard">
                  <div className="highlight_smallcard_img">
                    <img
                      src="assets/images/Footer/footer-4.png"
                      alt="footerimg"
                    />
                  </div>
                  <div className="highlight_smallcard_text text-center mt-2">
                    <h6>Youtube Thumbnail</h6>
                  </div>
                </div>
                <div className="highlight_smallcard">
                  <div className="highlight_smallcard_img">
                    <img src="assets/images/Footer/5.png" alt="footerimg" />
                  </div>
                  <div className="highlight_smallcard_text text-center mt-2">
                    <h6>Insta Landscape</h6>
                  </div>
                </div>
                <div className="highlight_smallcard">
                  <div className="highlight_smallcard_img">
                    <img src="assets/images/Footer/6.png" alt="footerimg" />
                  </div>
                  <div className="highlight_smallcard_text text-center mt-2">
                    <h6>
                      Facebook <br />
                      Portrait
                    </h6>
                  </div>
                </div>
                <div className="highlight_smallcard">
                  <div className="highlight_smallcard_img">
                    <img src="assets/images/Footer/7.png" alt="footerimg" />
                  </div>
                  <div className="highlight_smallcard_text text-center mt-2">
                    <h6>
                      Instagram <br />
                      Story
                    </h6>
                  </div>
                </div>
                <div className="highlight_smallcard">
                  <div className="highlight_smallcard_img">
                    <img src="assets/images/Footer/8.png" alt="footerimg" />
                  </div>
                  <div className="highlight_smallcard_text text-center mt-2">
                    <h6>
                      Instagram <br />
                      Portrait
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="certificate"
            role="tabpanel"
            aria-labelledby="certificate_tab"
            tabIndex={0}
          >
            Certificate
          </div>
          <div
            className="tab-pane fade"
            id="quotes"
            role="tabpanel"
            aria-labelledby="quotes_tab"
            tabIndex={0}
          >
            Quotes
          </div>
          <div
            className="tab-pane fade"
            id="instagram"
            role="tabpanel"
            aria-labelledby="instagram_tab"
            tabIndex={0}
          >
            Instagram
          </div>
          <div
            className="tab-pane fade"
            id="logo"
            role="tabpanel"
            aria-labelledby="logo_tab"
            tabIndex={0}
          >
            Logo
          </div>
          <div
            className="tab-pane fade"
            id="trending"
            role="tabpanel"
            aria-labelledby="trending_tab"
            tabIndex={0}
          >
            Trending
          </div>
        </div>
      </div>
      {/* ========== SMALL SCREEN HIGHLIGHT ACCORDION ========== */}
      <div className="highlight_accordion d-block d-sm-none">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item social_media mb-3">
            <h2 className="accordion-header active" id="headingOne">
              <button
                className="accordion-button text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#category_collapse"
                aria-expanded="true"
                aria-controls="category_collapse"
              >
                Social Media
              </button>
            </h2>
            <div
              id="category_collapse"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-white">
                <div className="highlight_single_tab">
                  <div className="owl-carousel highlight_swiper">
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/1.png" alt="footer" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2 text-white">
                        <h6>
                          Facebook <br />
                          Portrait
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/2.png" alt="footer" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2 text-white">
                        <h6>
                          Instagram <br />
                          Portrait
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/3.png" alt="footer" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2 text-white">
                        <h6>
                          Instagram <br />
                          Story
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img
                          src="assets/images/Footer/footer-4.png"
                          alt="footer"
                        />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2 text-white">
                        <h6>Youtube Thumbnail</h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/5.png" alt="footer" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2 text-white">
                        <h6>Insta Landscape</h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/6.png" alt="footer" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2 text-white">
                        <h6>
                          Facebook <br />
                          Portrait
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/7.png" alt="footer" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2 text-white">
                        <h6>
                          Instagram <br />
                          Story
                        </h6>
                      </div>
                    </div>
                    <div className="highlight_smallcard">
                      <div className="highlight_smallcard_img">
                        <img src="assets/images/Footer/8.png" alt="footer" />
                      </div>
                      <div className="highlight_smallcard_text text-center mt-2 text-white">
                        <h6>
                          Instagram <br />
                          Portrait
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item certificate mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#Certificate_collapse"
                aria-expanded="true"
                aria-controls="Certificate_collapse"
              >
                Certificate
              </button>
            </h2>
            <div
              id="Certificate_collapse"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-white">
                Certificate........
              </div>
            </div>
          </div>
          <div className="accordion-item quotes mb-3">
            <h2 className="accordion-header " id="headingOne">
              <button
                className="accordion-button text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#quotes_collapse"
                aria-expanded="true"
                aria-controls="quotes_collapse"
              >
                Quotes
              </button>
            </h2>
            <div
              id="quotes_collapse"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-white">Quotes</div>
            </div>
          </div>
          <div className="accordion-item instagram mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button text-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#instagram_collapse"
                aria-expanded="true"
                aria-controls="instagram_collapse"
              >
                Instagram
              </button>
            </h2>
            <div
              id="instagram_collapse"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body text-white">Instagram</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
  )
}
