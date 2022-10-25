import Meta from "../src/components/Meta";
import Image from "next/image";
import Link from "next/link";

const contact = () => {
  return (
    <>
      <Meta title="Fino | Contact" />
      <main className="main-content">
        <section className="breadcrumb">
          <div className="img-overlay">
            <Image
              alt="image"
              layout="fill"
              objectFit="cover"
              src="/slider.png"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-bread">
                  <h3>CONTACT US</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>CONTACT US</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-page body-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="contact-inner">
                  <div className="contact-form">
                    <h3>SEND MESSAGE</h3>
                    <form action="#">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Mail</label>
                        <input type="email" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textareLink className="form-control"></textareLink>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-form">
                          <span>SEND</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="info-contact">
                  <h3>CONTACT INFORMATION</h3>
                  <ul>
                    <li>
                      <Link href="tel:96612345678">
                        <a>
                          <i className="la la-phone"></i>
                          <span>
                            Phone : <u>+966 12345678</u>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:Info@lifepulse.com">
                        <a>
                          <i className="la la-phone"></i>
                          <span>
                            Email : <u>Info@lifepulse.com</u>
                          </span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>
                          <i className="la la-map-marker"></i>
                          <span>
                            Location : 77 E 4th St, New York, NY 10003, United
                            States
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  <div className="social-c">
                    <Link href="#" target="_balnk">
                      <a>
                        <i className="fab fa-instagram"></i>
                      </a>
                    </Link>
                    <Link href="#" target="_balnk">
                      <a>
                        <i className="fab fa-twitter"></i>
                      </a>
                    </Link>
                    <Link href="#" target="_balnk">
                      <a>
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default contact;
