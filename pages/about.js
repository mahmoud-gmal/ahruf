import Image from "next/image";
import Link from "next/Link";
import Meta from "../src/components/Meta";
const about = () => {
  return (
    <>
      <Meta title="Fino | About" />
      <main className="main-content">
        <section className="breadcrumb">
          <div className="img-overlay">
            <Image
              alt="image"
              layout="fill"
              objectFit="cover"
              src="/assets/slider.png"
            />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="text-bread">
                  <h3>about</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>about</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page body-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="text-about">
                  <h3>About us</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className="col-md-5 col-sm-12">
                <div className="img-about">
                  <div className="img">
                    <Image
                      alt="image"
                      width="100%"
                      height="100%"
                      layout="responsive"
                      src="/assets/p3.png"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-7 col-sm-12">
                <div className="text-about">
                  <h3>our goals</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and
                  </p>
                  <ul>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                    </li>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                    </li>
                    <li>
                      Lorem Ipsum is simply dummy text of the printing and
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-5 col-sm-12">
                <div className="img-about">
                  <div className="img">
                    <Image
                      alt="image"
                      layout="fill"
                      objectFit="cover"
                      src="/assets/p1.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-more">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="about-block">
                  <h3>our vision</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos; s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12">
                <div className="about-block">
                  <h3>our mission</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="special-h">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="special-block">
                  <div className="icon">
                    <i className="las la-award"></i>
                  </div>
                  <div className="details">
                    <h3>Hassle-free 100 Day Guarantee</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="special-block">
                  <div className="icon">
                    <i className="las la-couch"></i>
                  </div>
                  <div className="details">
                    <h3>We Have Furniture Made in KSA</h3>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="special-block">
                  <div className="icon">
                    <i className="las la-headset"></i>
                  </div>
                  <div className="details">
                    <h3>Best in Class Customer Service</h3>
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

export default about;
