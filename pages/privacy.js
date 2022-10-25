import Image from "next/image";
import Link from "next/link";
import Meta from "../src/components/Meta";
const privacy = () => {
  return (
    <>
      <Meta title="Fino | Privacy" />
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
                  <h3>Privacy</h3>
                  <ul>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <span>Privacy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="privacy-page body-inner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="privacy-inner">
                  <h3>Lorem Ipsum is simply</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting,
                  </p>
                  <h3>Lorem Ipsum is simply</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting,
                  </p>
                  <h3>Lorem Ipsum is simply</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting,
                  </p>
                  <h3>Lorem Ipsum is simply</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting,
                  </p>
                  <h3>Lorem Ipsum is simply</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default privacy;
