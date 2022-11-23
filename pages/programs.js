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
import styles from "./../styles/pages/programs.module.css";

// bootstrap
import { Col, Container, Row } from "react-bootstrap";


// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { faArrowleft } from "@fortawesome/free-regular-svg-icons";




// https://codesandbox.io/s/flamboyant-lucy-sgs1ys?file=/src/App.tsx



export default function Programs({ data}) {
// lang
  const { locale, locales, asPath } = useRouter();





  return (
    <>
      <Meta title="ahruf | Program details" />


      <main className="main-content">



        {/*============== Features of our programs ==========*/}
        <div className={styles.features}>
          <Container>
            <h2> مميزات برامجنا </h2>
            <Row style={{ maxWidth: '1115px',margin:' 0 auto'}}>
              <Col md={4}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/learning.png" width="48" height="48" />
                   <h3>مناهج تعليمية قوية</h3>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/knowledge-1.png" width="48" height="48" />
                   <h3> التعليم بطريقة تفاعلية </h3>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/knowledge-1.png" width="48" height="48" />
                   <h3> الدمج بين التعلم واللعب </h3>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/learning.png" width="48" height="48" />
                   <h3>مناهج تعليمية قوية</h3>
                </div>
              </Col>
              <Col md={4}>
                <div className={styles.item}>
                   <Image alt="logo" src="/assets/knowledge-1.png" width="48" height="48" />
                   <h3> التعليم بطريقة تفاعلية </h3>
                </div>
              </Col>
              <Col md={4}>
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




      </main>
    </>
  );
}

