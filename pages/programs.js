// react core
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
// nextjs components
import Image from "next/image";
import Link from "next/link";


// custom components
import Meta from "../src/components/Meta";
import Accordion from "../src/components/Accordion";

// styles
import styles from "./../styles/pages/programs.module.css";

// bootstrap
import { Col, Container, Row } from "react-bootstrap";


// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { faArrowleft } from "@fortawesome/free-regular-svg-icons";


// SWIPER
// import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Navigation, Pagination]);

//=== @bumagatabs ===//
// import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";
// // custom nav tabs
// const Tab = ({ children }) => {
//   const { onClick, isActive,} = useTabState();
//   return (
//     <li onClick={onClick} className={`${isActive ? styles.active : `inactive`} tab`}>
//       {children}
//     </li>
//   );
// };

// // custom tab content
// const Panel = ({ children }) => {
//   const isActive = usePanelState();
//   return isActive ? <>{children}</> : null;
// };



//=== react-tabs ===//
import Tabs from "react-tabs/lib/components/Tabs";
import TabList from "react-tabs/lib/components/TabList";
import Tab from "react-tabs/lib/components/Tab";
import TabPanel from "react-tabs/lib/components/TabPanel";




// framer notion
import { motion, AnimatePresence } from "framer-motion";

// https://codesandbox.io/s/flamboyant-lucy-sgs1ys?file=/src/App.tsx


// site url
const URL = process.env.NEXT_PUBLIC_API_URI;

// FETCHING DATA FROM API
export const getStaticProps = async ({locale }) => {

  // nav programs
  const navRes = await fetch(`${URL}nav-programs`, {headers: {'Accept-Language': locale }});
  const navData = await navRes.json();


  // all programs
  const programsRes = await fetch(`${URL}programs/`, {headers: {'Accept-Language': locale }});
  const programsData = await programsRes.json();


  // Programs Features
  const featsRes = await fetch(`${URL}about_us/programs_features`, {headers: {'Accept-Language': locale }});
  const featsData = await featsRes.json();

  // common questions
  const questionsRes = await fetch(`${URL}main_page/questions`, {headers: {'Accept-Language': locale }});
  const questionsData = await questionsRes.json();


  // Student activities
  const activitiesRes = await fetch(`${URL}main_page/shares`, {headers: {'Accept-Language': locale }});
  const activitiesData = await activitiesRes.json();

  if ((!navData, !programsData, !featsData, !questionsData, !activitiesData)) {
    return {
      notFound: true,
    };
  }
  return {
    props: { nav: navData, programs: programsData, feats: featsData, questions: questionsData, activities: activitiesData }, // will be passed to the page component as props
    revalidate: 10, //In seconds
  };
};



export default function Programs({ nav, programs, feats, questions, activities}) {
// lang
  const { locale, locales, asPath } = useRouter();

 // get param id
  const router = useRouter()
  const {id} = router.query

  // tab state
  const [tabIndex, setTabIndex] = useState(0);


useEffect(() => {
if(id){
  setTabIndex(id -1 )
}
  
},[id])


  return (
    <>
      <Meta title="ahruf | Program details" />


      <main className="main-content">


{/* Programs tabs */}

<div className={styles.programs}>
  <Container>
  <Tabs data-id={id} selectedIndex={tabIndex}  onSelect={(index) => setTabIndex(index)}>
    <Row className={styles.row_tabs}>


      <Col md={8}>




      {programs.data &&
                programs.data.map((item) => (

            <TabPanel key={item.id}>
            <AnimatePresence exitBeforeEnter>
            <motion.div 
                className={styles.tab_content}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}>

              <h2>{item.title}</h2>
            
              <ul className={styles.breadcrumb}>
                <li><Link href="/"><a> {locale == "en" ? "Home" : "الرئيسية"}</a></Link></li>
                <span>/</span>
                <li> {locale == "en" ? "available programs" : "البرامج المتاحة "}</li>
                <span>/</span>
                <li>{item.title}</li>
              </ul>


              <div className={styles.programs_details}>

                <h2 className={styles.title_details}>{locale == "en" ? "Program details" : " تفاصيل البرنامج "}</h2>

                <div className={`${styles.programs_details_list} ${styles.list_glob}`} dangerouslySetInnerHTML={{ __html: item?.description }}/>

                <h2 className={styles.title_output}> {locale == "en" ? "expected outcomes" : "المخرجات المتوقعة "}</h2>

                <div className={`${styles.programs_details_list_2} ${styles.list_glob}`} dangerouslySetInnerHTML={{ __html: item?.course_outcomes }}/>

                <Link href="https://ahrufedu.com/Dashboards/parent/login"><a className="special_btn"><span>  {locale == "en" ? "Join us" : "انضم الينا"}</span></a></Link>

              </div>

              </motion.div>

            </AnimatePresence>
            </TabPanel>

       ))}



      </Col>


      <Col md={4}>
        <div className={styles.nav_pill}>
          <h2> {locale == "en" ? "Software arrangement" : "ترتيب البرامج "}</h2>
            <TabList className={styles.programs_nav_list_num}>
              {nav.data.programs &&
                nav.data.programs.map((item, i) => (
                 <Tab className={tabIndex == i ? `${styles.active}` : 'inactive-tab'} key={item.id}>{item.title}</Tab>
                ))}

            </TabList>
      </div>
      </Col>

    </Row>
    </Tabs>
  </Container>
</div>


      {/*============== Features of our programs ==========*/}
      <div className={styles.features}>
        <Container>
          <h2> {locale == "en" ? "Features of our programs" : "مميزات برامجنا "}</h2>
          <Row style={{ maxWidth: '1115px',margin:' 0 auto'}}>

          {feats.data &&
                feats.data.map((item, index) => (
            <Col key={index} lg={4} md={6}>
              <div className={styles.item}>
                  <Image alt="" src={item.icon} width="48" height="48" />
                  <h3>{item.heading}</h3>
              </div>
            </Col>
          ))}

          </Row>
        </Container>
      </div>



        {/*============ Common Questions ===========*/}

        <div className={`${styles.common_ques} `}>
          <Container>
            <div className={styles.heading}>
            <h2>{questions.data?.content?.title} </h2>
            </div>
            <div className="ques_wrapper">


              <div className={styles.ques}>
              {questions.data.questions &&
              questions.data.questions.map((question, index) => (

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
                <Link href="https://ahrufedu.com/Dashboards/parent/login">
                  <a className="special_btn"><span>  {locale == "en" ? "Join us" : "انضم الينا"} </span></a>
                </Link>
              </div>
            </div>
          </Container>
        </div>



        {/*=========== Student activities ================*/}
        <div className={`${styles.student_activites} student_activites `}>
          <div className={styles.heading}>
          <h2>{activities.data?.content?.title} </h2>
            <Link href="/">
              <a className="twitter_btn_follow"> {activities.data?.content?.description}  </a>
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

              {activities.data.shares &&
            activities.data.shares.map((share, index) => (

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

