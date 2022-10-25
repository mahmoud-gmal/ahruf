import React from 'react'
import Image from "next/image";
import placholder from "./../../public/placeholder.png";
import Link from "next/link";

const Services = ({services}) => {
    const { serv_im, serv_des_hom, serv_hom } = services;


  return (

    <section className="services-safwa">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <div className="img-serv wow animate__animated animate__bounceInUp">
            <div className="img">
              <Image
                alt="services"
                src={serv_im ? serv_im : placholder}
                width="100%"
                height="100%"
                layout="responsive"
              />
            </div>
          </div>
        </div>

        <div className="col-md-7 col-sm-12">
          <div className="title-about wow animate__animated animate__bounceInUp">
            <h3>خدماتنا في مجتمع الصفوة التقنى</h3>
          </div>

          <div className="text-serv">
            <p className=" wow animate__animated animate__bounceInUp">
              {serv_des_hom}
            </p>
            <h3 className=" wow animate__animated animate__bounceInUp">
              وتشمل خدماتنا في مجتمع الصفوة التقني مايلي
            </h3>
            <div className="items-serv-in">
              {serv_hom &&
                serv_hom.map((item, index) => (
                  <div
                    key={index}
                    className="item wow animate__animated animate__bounceInUp"
                  >
                    <div className="icon">
                      <Image
                        alt={item.tit}
                        src={item.icon ? item.icon : placholder}
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <h4>{item.txt}</h4>
                  </div>
                ))}
            </div>
          </div>

          <Link href="/services">
            <a className="btn wow animate__animated animate__bounceInUp">
              <span>اعرف المزيد عن خدماتنا</span>
              <i className="flaticon flaticon-down-arrow-1"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>


  )
}

export default Services