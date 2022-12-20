import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// custom components
import Meta from "../src/components/Meta";
import Accordion from "../src/components/Accordion";

// styles
import styles from "./../styles/pages/about.module.css";

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
const URL = process.env.NEXT_PUBLIC_API_URI;

// FETCHING DATA FROM API
export const getStaticProps = async ({locale }) => {

  // About us
  const aboutRes = await fetch(`${URL}about_us/`, {headers: {'Accept-Language': locale }});
  const aboutData = await aboutRes.json();

  // Features
  const featuresRes = await fetch(`${URL}about_us/features`, {headers: {'Accept-Language': locale }});
  const featuresData = await featuresRes.json();

  // goals
  const goalsRes = await fetch(`${URL}about_us/goals`, {headers: {'Accept-Language': locale }});
  const goalsData = await goalsRes.json();

  // programs features
  const progFeatRes = await fetch(`${URL}about_us/programs_features`, {headers: {'Accept-Language': locale }});
  const progFeatData = await progFeatRes.json();

  // vision
  // const visionRes = await fetch(`${URL}about_us/vision`, {headers: {'Accept-Language': locale }});
  // const visionData = await visionRes.json();

  // achievements/numbers
  const numbersRes = await fetch(`${URL}main_page/numbers`, {headers: {'Accept-Language': locale }});
  const numbersData = await numbersRes.json();

  // Student activities
  const activitiesRes = await fetch(`${URL}main_page/shares`, {headers: {'Accept-Language': locale }});
  const activitiesData = await activitiesRes.json();

  // common questions
  const questionsRes = await fetch(`${URL}main_page/questions`, {headers: {'Accept-Language': locale }});
  const questionsData = await questionsRes.json();

  if ((!aboutData)) {
    return {
      notFound: true,
    };
  }
  return {
    props: { about: aboutData, features: featuresData, goals: goalsData, progFeat: progFeatData,
        numbers: numbersData, activities: activitiesData, questions: questionsData }, // will be passed to the page component as props
    revalidate: 10, //In seconds
  };
};




const About = ({about, features, goals, progFeat,  numbers, activities, questions}) => {
// lang
const { locale, locales, asPath } = useRouter();


// const [expanded, setExpanded] = useState(false);

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




  return (
    <>
      <Meta title="ahruf | About" />

      <main className="main-content">


        {/*============== About ==========*/}
        <div className={styles.about}>
          <Container>
            <Row> 
              <Col lg={6}> 
                <div className={styles.text_wrapp}>
                  <span> {about.data?.title}</span>
                  <h2 dangerouslySetInnerHTML={{ __html: about.data?.description }}/>
                  <div className={styles.items}>

                  {features.data &&
                  features.data.map((item, index) => (
                    <div key={index} className={styles.item}>
                    <div className={styles.icon_head}>
                        <Image alt="logo" src={item.icon} width="34" height="34"  />
                        <h3>{item.heading}</h3>
                      </div>
                      <div className="icon_foot">
                        <p>{item.paragraph}</p>
                      </div>
                    </div>
                  ))}
                  </div>

                </div>
                
              </Col>
              <Col lg={6}>
                <div className={styles.img_wrapper}>
                {about.data.images &&
                  about.data.images.map((item, index) => (

                   <div key={index} style={{backgroundImage: `${item.image}`}} className={`${index + 1 == 1 ? styles.img_1 : styles.img_2}`}></div>
                   
                   ))}
                   <div className={styles.img_3}></div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>



        {/*============== About vision/goals ==========*/}
        <div className={styles.about_vision}>
          <Container>
            <div className={styles.vision}>
              <div className={styles.shape_hold}>
                <h2>{goals.data.vision?.title}</h2>
                <p> {goals.data.vision?.description} </p>
              </div>
            </div>

            <Row>
              <Col md={5}>
               <div className={styles.image_wrapper}>
                  <Image alt=".." src={goals.data.images?.image} width="392" height="392" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  objectFit="contain" objectPosition=""
                  
                  />
               </div>
              </Col>
              <Col md={7}>
              <div className={styles.text_wrapper}>
                <h2> {locale == "en" ? "Goals" : "أهدافنا"}</h2>
                <ul className={styles.goals_list}>

                {goals.data.goals &&
                goals.data.goals.map((item, index) => (
                  <li key={index}>{item.goal}</li>
                  ))}

                  
                </ul>

              </div>
              </Col>
            </Row>


          </Container>
        </div>

        

        {/*============== Achivements ==========*/}
        <div className={`${styles.achivements} `}>
          <Container>
            <div className={`${styles.items} d-grid`}>

              <div className={styles.item}> 
              <span ref={ref}> {inView && <Counter from={0} to={numbers.data?.students} />}+ </span>
                <h4> {locale == "en" ? "Graduated student" : "طالب متخرج "} </h4>
              </div>

              <div className={styles.item}>
                <span><Counter from={0} to={numbers.data?.hours} />+</span>
                <h4> {locale == "en" ? "educational hour" : "ساعة تعليمية "}</h4>
              </div>
              <div className={styles.item}>
                <span><Counter from={0} to={numbers.data?.percentage} /> %</span>
                <h4> {locale == "en" ? "Completion rate" : "نسبة الإنجاز "}</h4>
              </div>
              <div className={styles.item}>
                <span><Counter from={0} to={numbers.data?.teachers} />+</span>
                <h4> {locale == "en" ? "Teacher and teacher" : "معلم ومعلمة "}</h4>
              </div>
              
            </div>
          </Container>
        </div>


        {/*============== Features of our programs ==========*/}
        <div className={styles.features}>
          <Container>
            <h2> {locale == "en" ? "Features of our programs" : "مميزات برامجنا "}</h2>
            <Row style={{ maxWidth: '1115px',margin:' 0 auto'}}>

            {progFeat.data &&
                progFeat.data.map((item, index) => (
                  
                <Col lg={4} md={6} key={index}>
                  <div className={styles.item}>
                    <Image alt="logo" src={item.icon} width="48" height="48" />
                    <h3> {item.heading}</h3>
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
            <h2>{activities.data?.content?.title} </h2>
              <Link href="/">
                <a className="twitter_btn_follow"> { activities.data?.content?.description}  </a>
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
};

export default About;
