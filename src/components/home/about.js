import React from 'react'
import Image from "next/image";
import Fancybox from "../../src/components/fancybox/Index"
import Link from "next/link";
import placholder from "./../../public/placeholder.png";



const About = ({about}) => {
const { ab_com, ab_com_im } = about;


  return (
    <section className="about-h">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="title-about wow animate__animated animate__bounceInUp">
            <h3>نبذة عن مجتمع الصفوة التقنى</h3>
          </div>
          <div className="text-about">
            {ab_com &&
              ab_com.map((item, index) => (
                <p
                  key={index}
                  className=" wow animate__animated animate__bounceInUp"
                >
                  {item.txt}
                </p>
              ))}

            <Link href="/about">
              <a className="btn wow animate__animated animate__bounceInUp">
                <span>معرفة المزيد</span>
                <i className="flaticon flaticon-down-arrow-1"></i>
              </a>
            </Link>
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div className="video-about wow animate__animated animate__bounceInUp">
            {ab_com_im && (
              <Fancybox>
                <Link href={ab_com_im} data-fancybox="about">
                  <a className="img" data-fancybox="about">
                    <Image
                      alt="about"
                      src={ab_com_im ? ab_com_im : placholder}
                      width="100%"
                      height="100%"
                      layout="responsive"
                    />
                    <i className="fa fa-play"></i>
                  </a>
                </Link>
              </Fancybox>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About