import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/Link";
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


const About = () => {
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
                  <span>من نحن</span>
                  <h2>مؤسسة تعليمية إفتراضية تستهدف <br /> بناء طفل يجيد القرائة والكتابة</h2>
                  <div className={styles.items}>
                    <div className={styles.item}>
                    <div className={styles.icon_head}>
                        <Image alt="logo" src="/assets/knowledge-1.png" width="34" height="34"  />
                        <h3>وسيلة التعليم عن بعد</h3>
                      </div>
                      <div className="icon_foot">
                        <p>نستخدم برنامج zoom للتعليم عن بعد حتى يتسنىللجميع سهولة التعلم والوصول الى محاضراتنا</p>
                      </div>
                    </div>
                    <div className={styles.item}>
                      <div className={styles.icon_head}>
                        <Image alt="logo" src="/assets/read.png" width="34" height="34"  />
                        <h3>وسيلة التعليم عن بعد</h3>
                      </div>
                      <div className="icon_foot">
                        <p>نستخدم برنامج zoom للتعليم عن بعد حتى يتسنىللجميع سهولة التعلم والوصول الى محاضراتنا</p>
                      </div>
                    </div>
                  </div>

                </div>
                
              </Col>
              <Col lg={6}>
                <div className={styles.img_wrapper}>
                   <div className={styles.img_1}></div>
                   <div className={styles.img_2}></div>
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
                <h2>الرؤية</h2>
                <p>تخريج جيل متقن للغة العربية (لغة القرآن) قراءة وكتابة</p>
              </div>
            </div>

            <Row>
              <Col md={5}>
               <div className={styles.image_wrapper}>
                  <Image alt=".." src="/assets/actity_2.png" width="392" height="392" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  objectFit="contain" objectPosition=""
                  
                  />
               </div>
              </Col>
              <Col md={7}>
              <div className={styles.text_wrapper}>
                <h2>أهدافنا</h2>
                <ul className={styles.goals_list}>
                  <li>إنشاء جيل متقن للغة العربية قراءة وكتابة</li>
                  <li>السهولة واليسر في التعلم</li>
                  <li>الوصول لأكبر عدد من الطلاب في المملكة</li>
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


        {/*============== Features of our programs ==========*/}
        <div className={styles.features}>
          <Container>
            <h2> مميزات برامجنا </h2>
            <Row style={{ maxWidth: '1115px',margin:' 0 auto'}}>
              <Col lg={4} md={6}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/learning.png" width="48" height="48" />
                   <h3>مناهج تعليمية قوية</h3>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/knowledge-1.png" width="48" height="48" />
                   <h3> التعليم بطريقة تفاعلية </h3>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/knowledge-1.png" width="48" height="48" />
                   <h3> الدمج بين التعلم واللعب </h3>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/learning.png" width="48" height="48" />
                   <h3>مناهج تعليمية قوية</h3>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/knowledge-1.png" width="48" height="48" />
                   <h3> التعليم بطريقة تفاعلية </h3>
                </div>
              </Col>
              <Col lg={4} md={6}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/knowledge-1.png" width="48" height="48" />
                   <h3> الدمج بين التعلم واللعب </h3>
                </div>
              </Col>

            </Row>
          </Container>
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
                    style={{ maxWidth: "700px", width:'100%', margin: 'auto' }} >
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
};

export default About;
