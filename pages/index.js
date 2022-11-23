// react core
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
// nextjs components
import Image from "next/image";
import Link from "next/Link";


// custom components
import Meta from "../src/components/Meta";
import Accordion from "../src/components/Accordion";

// styles
import styles from "./../styles/pages/Home.module.css";

// bootstrap
import { Col, Container, Row } from "react-bootstrap";

// SWIPER
// import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { faArrowleft } from "@fortawesome/free-regular-svg-icons";

// animation
import { animate, motion, useAnimation, useAnimationControls } from "framer-motion";
import { useInView } from 'react-intersection-observer';






export default function Home({ data}) {
// lang
  const { locale, locales, asPath } = useRouter();


  // const [expanded, setExpanded] = useState(false);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold:0,
  });

  const animationPrograms = useAnimation();

  // useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    // if (inView) {
      animationPrograms.start({
        opacity: 1,
        transition:{
           duration:2, 
           type: 'spring',
          // bounce: 0.3
        }
      });
    // } 
    // else {
    //   animationPrograms.start({opacity: 0});
    // }
  // }, [inView]);





// Counter Animation
  function Counter({ from, to }) {
    const nodeRef = useRef();

      useEffect(() => {
        const node = nodeRef.current;
        const controls = animate(from, to, {
          duration: 1,
          onUpdate(value) {
            // node.textContent = value;
            node.textContent = value.toFixed(0);
          }
        });

        return () => controls.stop();
      }, [from, to]);

    return <span ref={nodeRef} />;
  }


  // animation in view test
  // const control = useAnimationControls();
  // const boxVariant = {
  //   visible: { opacity: 1, transition: { duration: 3 } },
  //   hidden: { opacity: 0 }
  // };

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //     console.log("visible")
  //   } 
  //   // else {
  //   //   control.start("hidden");
  //   // }
  // }, [control, inView]);




  return (
    <>
      <Meta />
      
      {/*} <Projects work_cats={work_cats} works={works}/> */}

      <main className="main-content">
        {/*================= ٍBanner ==========*/}
        <motion.div className={styles.banner}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3 }}
        >
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
                    
                                <a className="special_btn"><span>  {locale == "en" ? "Join us" : "انضم الينا"}</span> </a>
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
                                layout="responsive"
                                objectFit="contain"
                                priority
                            />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
          </motion.div>

        {/*================ our programs =============*/}
        <motion.div className={`${styles.our_programs} d-flex align-items-center`}
        //               // initial={{ opacity: 0 }}
        //               // animate={{ opacity: 1 }}
        //               animate={inView ? { opacity: 0 } : { opacity: 1 }}
        //               // exit={{ opacity: 0 }}
        //               transition={{ duration: 3 }}
        // ref={ref}
        >
          <Container>
            <Row className="justify-content-center">
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

              <Col md={7}>
                <div className={`d-grid ${styles.items}`}>
                  <motion.div className={`d-flex align-items-center ${styles.item}`}
                    whileHover={{ 
                      left: 10
                     }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    // transition={{type: "spring", ease: "easeIn", duration: .4 }}
                  >
                    <div className={styles.icon}>
                      <Image
                        src="/assets/image-1.png"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>برنامج الروضة</h4>
                  </motion.div>
                  <motion.div className={`d-flex align-items-center ${styles.item}`}
                      whileHover={{ 
                        left: 10
                        }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      // transition={{type: "spring", ease: "easeIn", duration: .4 }}
                                    
                  >
                    <div className={styles.icon}>
                      <Image
                        src="/assets/image-2.png"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>برنامج الروضة</h4>
                  </motion.div>
                  <motion.div className={`d-flex align-items-center ${styles.item}`}
                        whileHover={{ 
                          left: 10
                          }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        // transition={{type: "spring", ease: "easeIn", duration: .4 }}
                                    
                  >
                    <div className={styles.icon}>
                      <Image
                        src="/assets/Image-3.png"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>برنامج الروضة</h4>
                  </motion.div>
                  <motion.div className={`d-flex align-items-center ${styles.item}`}
                      whileHover={{ 
                        left: 10
                        }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      // transition={{type: "spring", ease: "easeIn", duration: .4 }}
                                    
                  >
                    <div className={styles.icon}>
                      <Image
                        src="/assets/image-4.png"
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>برنامج الروضة</h4>
                  </motion.div>
                </div>
              </Col>
              {/* <Col md={1}></Col> */}
            </Row>
          </Container>
        </motion.div>


        {/*============== Achivements ==========*/}
        <div className={`${styles.achivements} `}>
          <Container>
            <div className={`${styles.items} d-grid`}>
              <div className={styles.item}>
              <span ref={ref}> {inView && <Counter from={0} to={14500} />}+</span>
                <h4>طالب متخرج</h4>
              </div>
              <div className={styles.item}>
                <span><Counter from={0} to={150000} />+</span>
                <h4> ساعة تعليمية </h4>
              </div>
              <div className={styles.item}>
                <span><Counter from={0} to={99} /> %</span>
                <h4> نسبة الإنجاز </h4>
              </div>
              <div className={styles.item}>
                <span><Counter from={0} to={100} />+</span>
                <h4> معلم ومعلمة </h4>
              </div>
            </div>
          </Container>
        </div>

        {/* <motion.div animate={controls}><h2>ggggggggggggggggggggg</h2></motion.div> */}

      {/* <div ref={ref}>
      <h2>{`Header inside viewport ${inView}.`}</h2>
    </div>

        <Counter from={0} to={100} /> */}




        {/*============= Subscription  =========*/}
        <div ref={ref} className={`${styles.subscription } `}>

            <Row className="align-items-center m-0">
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
                <div className={`${styles.items} d-grid`}>
                  <motion.div className={styles.item}
                        whileHover={{ translateZ: 15, translateX: 15 }}
                        // transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        transition={{type: "spring", ease: "easeIn", duration: .4 }}
                  >
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
                  </motion.div>
                  <motion.div className={styles.item}
                        whileHover={{ translateZ: -15, translateX: -15 }}
                        // transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        transition={{type: "spring", ease: "easeIn", duration: .4 }}
                  >
                    <div className={styles.price_wrap}>
                      <span className={styles.price}>150</span>
                      <span className={styles.currency}>ريال / شهريا</span>
                    </div>
                    <h4>الباقة الاساسية</h4>
                    <div className={styles.details}>
                      <ul>
                        <li>طالب واحد فقط داخل المجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                        <li>10 طلاب لكل مجموعة</li>
                      </ul>
                      <Link href="/">
                      <a className="special_btn"><span> الاشتراك في هذه الباقة</span></a>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </Col>
            </Row>
        </div>

        
        {/* ========== What They Say ================ */}
        <div className={`${styles.what_say} `}
                  // ref={ref}
                  // variants={boxVariant}
                  // initial="hidden"
                  // animate={control}
        >
            <div className={styles.heading}>
              <h2>ماذا قالو عنا</h2>
            </div>

            <Swiper
              className={`cus_what_say ${styles.what_say_slider}`}
              spaceBetween={15}
              slidesPerView={4.2}
              loop
              centeredSlides
              centeredSlidesBounds
              speed={1200}
              navigation
              freeMode
              breakpoints={{
                0: {
                  // width: 0,
                  slidesPerView: 1,
                },
                500: {
                  // width: 600,
                  slidesPerView: 2.2,
                },
                900: {
                  // width: 1000,
                  slidesPerView: 4.2,
                },
              }}
            >
              <SwiperSlide className={styles.item}>
                <div className="test-block">
                  <p>
                  اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ، والافضل انه كل الدورات اونلاين .
                  </p>
                  <h3> سمية الشهري </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.item}>
                <div className="test-block">
                <p>
                  اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ، والافضل انه كل الدورات اونلاين .
                  </p>
                  <h3> سمية الشهري </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className={styles.item}>
                <div className="test-block">
                <p>
                  اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ، والافضل انه كل الدورات اونلاين .
                  </p>
                  <h3> سمية الشهري </h3>
                </div>
              </SwiperSlide>
            </Swiper>
        </div>

        {/*============ Common Questions ===========*/}


        <div className={`${styles.common_ques} `}>
          <Container>
            <div className={styles.heading}>
              <h2> الاسئلة الشائعة </h2>
            </div>
            <div className="ques_wrapper">


              <div className={styles.ques}>

              <Accordion
                title="كم مدة البرنامج التدريبي"
                className={styles.que}
                content='<p>
                اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت
                قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ،
                والافضل انه كل الدورات اونلاين . </p>'
                />               
              <Accordion
                title="كم مدة البرنامج التدريبي"
                className={styles.que}
                content='<p>
                اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت
                قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ،
                والافضل انه كل الدورات اونلاين . </p>'
                />               
              <Accordion
                title="كم مدة البرنامج التدريبي"
                className={styles.que}
                content='<p>
                اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت
                قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ،
                والافضل انه كل الدورات اونلاين . </p>'
                />               
              <Accordion
                title="كم مدة البرنامج التدريبي"
                className={styles.que}
                content='<p>
                اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت
                قياسي ، بعد محاولات سابقة غير ناجحة مع منصات اخرى ،
                والافضل انه كل الدورات اونلاين . </p>'
                />               


                <Link href="/">
                  <a
                    className={`${styles.more_btn_link}  d-flex align-items-center justify-content-end `}
                    style={{ maxWidth: "700px" }}
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
        <div className={`${styles.student_activites} student_activites `}>
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
              clickable: true
            }}
            // spaceBetween={15}
            slidesPerView={4.2}
            centeredSlides
            centeredSlidesBounds
            navigation={true}
            speed={1200}
            freeMode
            loop
            breakpoints={{
              0: {
                // width: 0,
                slidesPerView: 1,
              },
              500: {
                // width: 600,
                slidesPerView: 2.2,
              },
              900: {
                // width: 1000,
                slidesPerView: 4.2,
              },
            }}            
          >
            <SwiperSlide className="item">
              <Image
                src="/assets/s_1.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide className="item">
              <Image
                src="/assets/s_2.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="contain"
                priority
              />
            </SwiperSlide>
            <SwiperSlide className="item">
              <Image
                src="/assets/s_3.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide className="item">
              <Image
                src="/assets/s_4.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="contain"
              />
            </SwiperSlide>
            <SwiperSlide className="item">
              <Image
                src="/assets/s_5.png"
                alt=""
                width="272"
                height="260"
                layout="responsive"
                objectFit="contain"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
}

