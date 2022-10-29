import React, { useState } from "react";
import Image from "next/image";
import Link from "next/Link";
import Meta from "../src/components/Meta";

// styles
import styles from "./../styles/pages/Home.module.css";

// SWIPER
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faArrowleft } from "@fortawesome/free-regular-svg-icons";

// bootstrap
import { Col, Container, Row } from "react-bootstrap";

// Home componets
// import { ACF_ENDPOINT, GET_PRODUCTS_ENDPOINT, GET_PRODUCT_CATS_ENDPOINT } from '../src/utils/constants/endpoints';
// import { DEFAULT_IMG_URL } from '../src/utils/constants/images';y";
// import { getProductsData } from '../src/utils/products';

export default function Home({ data, products, cats }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Meta />

      {/*}
      <Projects work_cats={work_cats} works={works}/>
      <WhatTheySay whatSay={data.acf}/> */}

      <main className="main-content">
        {/*================= ٍBanner ==========*/}
        <div className={styles.banner}>
            <div className={styles.banner_2shape}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className={styles.banner_txt}>
                            <h2>
                                مرحبا بكم في
                                <br />
                                أكاديمية مٌنصةٌ أحرف التعليمٌيةٌ
                            </h2>
                            <p>
                                وصلت إلى وجهتك لبناء طفل متميزٌ في اللغة العربيةٌ منصة
                                تعليمٌيةٌ لتخر يجٌ جيلٌ متمكن للغة القرآن كتابة وتحدثا
                            </p>
                            <Link href="/">
                                <a className="special_btn"><span>انضم الينا </span> </a>
                            </Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.banner_im}>
                            <Image
                                src="/assets/Learning girl.png"
                                alt="logo"
                                width="650"
                                height="450"
                                // layout="responsive"
                                objectFit="contain"
                                priority
                            />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

        {/*================ our programs =============*/}
        <div className={`${styles.our_programs} d-flex align-items-center`}>
          <Container>
            <Row>
              <Col md={4}>
                <div className={styles.info}>
                  <h2> مختارات من برامجنا </h2>
                  <p>
                    {" "}
                    برامجنا موجهة للأطفال، الإناث من سن 4 سنوت الى 13 سنه و
                    الذكور من سن 4 سنوت إلى 10 سنوات{" "}
                  </p>
                  <Link href="/">
                    <a className="special_btn"> <span> تعرف على برامجنا المتاحة </span></a>
                  </Link>
                </div>
              </Col>

              <Col md={8}>
                <div className={`d-grid ${styles.items}`}>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <Image
                        src="/assets/image-1.png"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>برنامج الروضة</h4>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <Image
                        src="/assets/image-2.png"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>برنامج الروضة</h4>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <Image
                        src="/assets/Image-3.png"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>برنامج الروضة</h4>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.icon}>
                      <Image
                        src="/assets/image-4.png"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>برنامج الروضة</h4>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/*============== Achivements ==========*/}
        <div className={styles.achivements}>
          <Container>
            <div className={`${styles.items} d-grid`}>
              <div className={styles.item}>
                <span>14’500+</span>
                <h4>طالب متخرج</h4>
              </div>
              <div className={styles.item}>
                <span>14’500+</span>
                <h4> ساعة تعليمية </h4>
              </div>
              <div className={styles.item}>
                <span>14’500+</span>
                <h4> نسبة الإنجاز </h4>
              </div>
              <div className={styles.item}>
                <span>14’500+</span>
                <h4> معلم ومعلمة </h4>
              </div>
            </div>
          </Container>
        </div>

        {/*============= Subscription  =========*/}
        <div className={styles.subscription}>
          <Container>
            <Row className="align-items-center">
              <Col md={4}>
                <div className={styles.info}>
                  <h2>باقات الاشتراك</h2>
                  <p>
                    تمتد كل دورة تدريبية على مدار شهرين ، و لاختبار نظام التدريس
                    اكثر يمكنك الاطلاع على اراء المستخدمين او الاطلاع على تجارب
                    الملتحقين بالبرامج ، او التعرف اكثر على طريقة التدريس عبر
                    حساب الاكاديمية على انستغرام
                  </p>
                </div>
              </Col>
              <Col md={8}>
                <div className={`${styles.items} d-flex`}>
                  <div className={styles.item}>
                    <div className={styles.price_wrap}>
                      <span className={styles.price}>150</span>
                      <span className={styles.currency}>ريال / شهريا</span>
                    </div>
                    <h4>الباقة الاساسية</h4>
                    <div className={styles.details}>
                      <ul>
                        <li>10 طلاب لكل مجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                      </ul>
                      <Link href="/">
                        <a className="special_btn"><span> الاشتراك في هذه الباقة</span></a>
                      </Link>
                    </div>
                  </div>
                  <div className={styles.item}>
                    <div className={styles.price_wrap}>
                      <span className={styles.price}>150</span>
                      <span className={styles.currency}>ريال / شهريا</span>
                    </div>
                    <h4>الباقة الاساسية</h4>
                    <div className={styles.details}>
                      <ul>
                        <li>10 طلاب لكل مجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                      </ul>
                      <Link href="/">
                      <a className="special_btn"><span> الاشتراك في هذه الباقة</span></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* ========== What They Say ================ */}
        <div className={styles.what_say}>
          <Container>
            <div className={styles.heading}>
              <h2>ماذا قالو عنا</h2>
            </div>

            <Swiper
              className={styles.what_say_slider}
              pagination={{ clickable: true }}
              // navigation
              spaceBetween={20}
              slidesPerView={3}
            >
              <SwiperSlide className={styles.item}>
                <div className="test-block">
                  <p>
                    لاحظت التطور السريع الواضح على ابني منذ الاسبوع الاول له في
                    الكورسات ، والسبب في العدد الاقصى للطلاب في كل مجموعة وهو 10
                    فقط .
                  </p>
                  <h3> سمية الشهري </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.item}>
                <div className="test-block">
                  <p>
                    لاحظت التطور السريع الواضح على ابني منذ الاسبوع الاول له في
                    الكورسات ، والسبب في العدد الاقصى للطلاب في كل مجموعة وهو 10
                    فقط .
                  </p>
                  <h3> سمية الشهري </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.item}>
                <div className="test-block">
                  <p>
                    لاحظت التطور السريع الواضح على ابني منذ الاسبوع الاول له في
                    الكورسات ، والسبب في العدد الاقصى للطلاب في كل مجموعة وهو 10
                    فقط .
                  </p>
                  <h3> سمية الشهري </h3>
                </div>
              </SwiperSlide>
            </Swiper>
          </Container>
        </div>

        {/* https://github.com/obrm/Accordion/tree/master/src */}
        {/*============ Common Questions ===========*/}
        <div className={styles.common_ques}>
          <Container>
            <div className={styles.heading}>
              <h2> الاسئلة الشائعة </h2>
            </div>
            <div className="ques_wrapper">
              <div className={styles.ques}>
                <div className={styles.que}>
                  <a
                    className="que_heading"
                    style={{ cursor: "pointer" }}
                    onClick={() => setExpanded(!expanded)}
                  >
                    <h2>كم مدة البرنامج التدريبي</h2>
                  </a>
                  {expanded && (
                    <div className="que_description">
                      <p>
                        اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت
                        قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ،
                        والافضل انه كل الدورات اونلاين .
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.que}>
                  <a
                    className="que_heading"
                    style={{ cursor: "pointer" }}
                    onClick={() => setExpanded(!expanded)}
                  >
                    <h2>كم مدة البرنامج التدريبي</h2>
                  </a>
                  {expanded && (
                    <div className="que_description">
                      <p>
                        اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت
                        قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ،
                        والافضل انه كل الدورات اونلاين .
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.que}>
                  <a
                    className="que_heading"
                    style={{ cursor: "pointer" }}
                    onClick={() => setExpanded(!expanded)}
                  >
                    <h2>كم مدة البرنامج التدريبي</h2>
                  </a>
                  {expanded && (
                    <div className="que_description">
                      <p>
                        اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت
                        قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ،
                        والافضل انه كل الدورات اونلاين .
                      </p>
                    </div>
                  )}
                </div>
                <div className={styles.que}>
                  <a
                    className="que_heading"
                    style={{ cursor: "pointer" }}
                    onClick={() => setExpanded(!expanded)}
                  >
                    <h2>كم مدة البرنامج التدريبي</h2>
                  </a>
                  {expanded && (
                    <div className="que_description">
                      <p>
                        اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت
                        قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ،
                        والافضل انه كل الدورات اونلاين .
                      </p>
                    </div>
                  )}
                </div>

                <Link href="/">
                  <a
                    className="more_btn_link d-flex align-items-center justify-content-end"
                    style={{ width: "700px" }}
                  >
                    {" "}
                    لديك المزيد من الاستفسارات ! تواصل معنا{" "}
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ width: 20, marginRight: "12px" }}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.start}>
                <h3>انت الان جاهر للبدء ؟</h3>
                <Link href="/">
                  <a className="special_btn"><span> انضم الينا </span></a>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        {/*=========== Student activities ================*/}
        <div className={styles.student_activites}>
          <div className={styles.heading}>
            <h2> مشاركات الطلاب </h2>
            <Link href="/">
              <a className="twitter_btn_follow"> Follow us @ahruf_edu </a>
            </Link>
          </div>
          <Swiper
            className={styles.student_activites_slider}
            pagination={{
              dynamicBullets: true,
            }}
            spaceBetween={15}
            slidesPerView={4.2}
            centeredSlides
            centeredSlidesBounds
            freeMode
            loop
          >
            <SwiperSlide className="item">
              <Image
                src="/assets/s_1.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide className="item">
              <Image
                src="/assets/s_2.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide className="item">
              <Image
                src="/assets/s_3.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide className="item">
              <Image
                src="/assets/s_4.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="cover"
              />
            </SwiperSlide>
            <SwiperSlide className="item">
              <Image
                src="/assets/s_5.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
}
