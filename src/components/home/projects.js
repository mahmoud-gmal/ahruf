import React from 'react'
import Image from "next/image";
import Link from "next/link";
import placholder from "./../../public/placeholder.png";

// import Tabs from "react-tabs/lib/components/Tabs";
// import TabList from "react-tabs/lib/components/TabList";
// import Tab from "react-tabs/lib/components/Tab";
// import TabPanel from "react-tabs/lib/components/TabPanel";


// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
} from "swiper/core";
import "swiper/swiper.min.css";
SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);


const Projects = ({work_cats, works}) => {



  return (

    <section className="projects-h projects-h3">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="title">
            <h3 className="wow animate__ animate__bounceInUp  animated">
              نعرض عليكم الآن بعض أعمالنا
            </h3>
          </div>
        </div>

        <Tabs className="col-md-12 wow animate__ animate__bounceInUp  animated">
          <TabList className="nav nav-pills">
            {work_cats &&
              work_cats.map((item, index) => (
                <Tab key={index} className="nav-item">
                  {" "}
                  <a className="nav-link"> {item.name} </a>
                </Tab>
              ))}
          </TabList>

          <div className="tab-content">
            {work_cats &&
              work_cats.map((cat, i) => (
                <TabPanel key={i}>
                  <Swiper
                    centeredSlides={true}
                    loop={false}
                    pagination={{
                      clickable: true,
                    }}
                    spaceBetween={0}
                    slidesPerView={3}
                    className="projects-slider"
                  >
                    {works &&
                      works.map((post, x) => (
                        <>
                          {post.work_section.includes(cat.id) && (
                            <SwiperSlide key={x} className="item">
                              {({ isActive }) => (
                                <div
                                  className={
                                    isActive ? "active center" : "not"
                                  }
                                >
                                  <div className="proj-block">
                                    <div className="img">
                                      <Image
                                        alt="slide"
                                        src={
                                          post.featured_image
                                            ? post.featured_image
                                            : placholder
                                        }
                                        width="100%"
                                        height="100%"
                                        layout="responsive"
                                      />
                                    </div>
                                    <div className="details">
                                      <h3
                                        dangerouslySetInnerHTML={{
                                          __html: post.title.rendered,
                                        }}
                                      ></h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </SwiperSlide>
                          )}
                        </>
                      ))}
                  </Swiper>
                </TabPanel>
              ))}
          </div>
        </Tabs>

        <div className="col-md-12">
          <Link href="/works">
            <a
              className="btn btn-center wow animate__ animate__bounceInUp"
              style={{ visibility: "visible" }}
            >
              <span>عرض المزيد من الأعمال</span>
              <i className="flaticon-down-arrow-1"></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Projects