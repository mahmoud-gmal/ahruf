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


// site url
const URL = process.env.NEXT_SITE_URL;

// FETCHING DATA FROM API
export const getStaticProps = async ({locale }) => {

  // Main landing
  const mainRes = await fetch(`${URL}main_page/main`, {headers: {'Accept-Language': locale }});
  const mainData = await mainRes.json();

  // ourPrograms
  const ourProgramsRes = await fetch(`${URL}main_page/ourPrograms`, {headers: {'Accept-Language': locale }});
  const ourProgramsData = await ourProgramsRes.json();

  // achievements/numbers
  const numbersRes = await fetch(`${URL}main_page/numbers`, {headers: {'Accept-Language': locale }});
  const numbersData = await numbersRes.json();

  // packages
  const packagesRes = await fetch(`${URL}main_page/packages`, {headers: {'Accept-Language': locale }});
  const packagesData = await packagesRes.json();

  // quotes
  const quotesRes = await fetch(`${URL}main_page/quotes`, {headers: {'Accept-Language': locale }});
  const quotesData = await quotesRes.json();

  // common questions
  const questionsRes = await fetch(`${URL}main_page/questions`, {headers: {'Accept-Language': locale }});
  const questionsData = await questionsRes.json();

  // Student activities
  const activitiesRes = await fetch(`${URL}main_page/shares`, {headers: {'Accept-Language': locale }});
  const activitiesData = await activitiesRes.json();



  if ((!mainData, !ourProgramsData, !numbersData, !packagesData, !quotesData, !questionsData, !activitiesData)) {
    return {
      notFound: true,
    };
  }
  return {
    props: { banner: mainData, programs: ourProgramsData, achiv: numbersData,
      packages: packagesData, quotes: quotesData, questions: questionsData, activities: activitiesData }, // will be passed to the page component as props
    revalidate: 10, //In seconds
  };
};



export default function Home({ banner, programs, achiv, packages, quotes, questions, activities }) {


// lang
  const { locale, locales, asPath } = useRouter();


  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold:0,
  });




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


// banner
const bannerData = banner.data;

// programs
const programsData = programs.data;

// achievements
const achivData = achiv.data;

// packages
const packagesData = packages.data;

// quotes
const quotesData = quotes.data;

// common questions
const questionsData = questions.data; 

// Student activities
const activitiess = activities.data;     


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
                            <h2>{bannerData?.content?.title} </h2>
                            <p>{bannerData?.content?.description} </p>
                            <Link href="/contact">
                                <a className="special_btn"><span>  {locale == "en" ? "Join us" : "انضم الينا"} </span> </a>
                            </Link>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={styles.banner_im}>
                            <Image
                                src={bannerData?.images?.image}
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
                  <h2>{programsData?.content?.title}</h2>
                  <p>{programsData?.content?.description}</p>
                  <Link href="/programs">
                    <a className="special_btn"> <span> {locale == "en" ? "Learn about our available programs" : "تعرف على برامجنا المتاحة "}</span></a>
                  </Link>
                </div>
              </Col>

              <Col md={7}>

                <div className={`d-grid ${styles.items}`}>

                {programsData.courses &&
                programsData.courses.map((course) => (
                  <motion.div key={course.id} className={`d-flex align-items-center ${styles.item}`}
                    whileHover={{   left: 10  }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    // transition={{type: "spring", ease: "easeIn", duration: .4 }}
                  >
                    <div className={styles.icon}>
                      <Image
                        src={course?.image}
                        alt=""
                        width="50"
                        height="50"
                      />
                    </div>
                    <h4>{course?.title}</h4>
                  </motion.div>
                ))}

                </div>
              </Col>
            </Row>
          </Container>
        </motion.div>


        {/*============== Achivements ==========*/}
        <div className={`${styles.achivements} `}>
          <Container>
            <div className={`${styles.items} d-grid`}>

              <div className={styles.item}> 
              <span ref={ref}> {inView && <Counter from={0} to={achivData?.students} />}+ </span>
                <h4> {locale == "en" ? "Graduated student" : "طالب متخرج "} </h4>
              </div>

              <div className={styles.item}>
                <span><Counter from={0} to={achivData?.hours} />+</span>
                <h4> {locale == "en" ? "educational hour" : "ساعة تعليمية "}</h4>
              </div>
              <div className={styles.item}>
                <span><Counter from={0} to={achivData?.percentage} /> %</span>
                <h4> {locale == "en" ? "Completion rate" : "نسبة الإنجاز "}</h4>
              </div>
              <div className={styles.item}>
                <span><Counter from={0} to={achivData?.teachers} />+</span>
                <h4> {locale == "en" ? "Teacher and teacher" : "معلم ومعلمة "}</h4>
              </div>
              
            </div>
          </Container>
        </div>


        {/*============= Subscription  =========*/}
        <div ref={ref} className={`${styles.subscription } `}>

            <Row className="align-items-center m-0">
              <Col md={4}>
                <div className={styles.info}>
                  <h2>{packagesData?.content?.title}</h2>
                  <p>{packagesData?.content?.description}</p>
                </div>
              </Col>
              <Col md={8}>
                <div className={`${styles.items} d-grid`}>


                {packagesData.packages &&
                packagesData.packages.map((item, index) => (
                  <motion.div key={index} className={styles.item}
                        whileHover={{ translateZ: 15, translateX: 15 }}
                        // transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        transition={{type: "spring", ease: "easeIn", duration: .4 }}
                  >
                    <div className={styles.price_wrap}>
                      <span className={styles.price}>{item?.price}</span>
                      <span className={styles.currency}> {locale == "en" ? "SR / per month" : "ريال / شهريا "}</span>
                    </div>
                    <h4> {item?.title} </h4>
                    <div className={styles.details}>
                      <ul className="back_data_package"><li dangerouslySetInnerHTML={{__html: item?.description}}/></ul>
                      <Link href="/login">
                        <a className="special_btn"><span> {locale == "en" ? "Subscribe to this package" : "الاشتراك في هذه الباقة "}</span></a>
                      </Link>
                    </div>
                  </motion.div>
                  ))}



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
            <h2>{quotesData?.content?.title} </h2>
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

              {quotesData.quotes &&
              quotesData.quotes.map((quote, index) => (
                <SwiperSlide key={index} className={styles.item} >
                  <div className="test-block">
                    <p>{quote.content}</p>
                    <h3> {quote.author}</h3>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
        </div>

        {/*============ Common Questions ===========*/}


        <div className={`${styles.common_ques} `}>
          <Container>
            <div className={styles.heading}>
            <h2>{questionsData?.content?.title} </h2>
            </div>
            <div className="ques_wrapper">


              <div className={styles.ques}>
              {questionsData.questions &&
              questionsData.questions.map((question, index) => (

              <Accordion
                key={index}
                title={question.question}
                className={styles.que}
                content={`<p>${question.answer}</p>`}
                />   
                
              ))}      

                <Link href="/">
                <a
                    className={`${styles.more_btn_link}  d-flex align-items-center justify-content-end `}
                    style={{ maxWidth: "700px", width:'100%', margin: 'auto' }} >
                   {locale == "en" ? "Have more inquiries! Connect with us" : " لديك المزيد من الاستفسارات ! تواصل معنا"} 
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      style={{ width: 20, marginRight: "12px" }}
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.start}>
                <h3> {locale == "en" ? "Are you now ready to start ?" : "انت الان جاهر للبدء ؟ "}</h3>
                <Link href="/">
                  <a className="special_btn"><span>  {locale == "en" ? "Join us" : "انضم الينا"} </span></a>
                </Link>
              </div>
            </div>
          </Container>
        </div>



        {/*=========== Student activities ================*/}
        <div className={`${styles.student_activites} student_activites `}>
          <div className={styles.heading}>
          <h2>{activitiess?.content?.title} </h2>
            <Link href="/">
              <a className="twitter_btn_follow"> {activitiess?.content?.description}  </a>
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

              {activitiess.shares &&
            activitiess.shares.map((share, index) => (

              <SwiperSlide key={index} className="item">
                <Image
                  src={share.image}
                  alt=""
                  width="272"
                  height="260"
                  layout="responsive"
                  objectFit="contain"
                />
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
      </main>
    </>
  );
}

