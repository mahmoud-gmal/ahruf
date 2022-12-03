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
import styles from "./../styles/pages/profile.module.css";

// bootstrap
import { Col, Container, Row } from "react-bootstrap";


// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTable, faBookBookmark, faBook, faCommentAlt} from "@fortawesome/free-solid-svg-icons";
// import { faArrowleft } from "@fortawesome/free-regular-svg-icons";


// tabs
import { Tabs, useTabState, usePanelState } from "@bumaga/tabs";

// custom nav tabs
const Tab = ({ children }) => {
  const { onClick, isActive } = useTabState();
  return (
    <li onClick={onClick} className={`${isActive ? styles.active : "inactive"} tab`}>
      {children}
    </li>
  );
};

// custom tab content
const Panel = ({ children }) => {
  const isActive = usePanelState();
  return isActive ? <>{children}</> : null;
};




// https://codesandbox.io/s/flamboyant-lucy-sgs1ys?file=/src/App.tsx


export default function Profile({ data}) {
// lang
  const { locale, locales, asPath } = useRouter();





  return (
    <>
      <Meta title="ahruf | Profile " />


      <main className="main-content">


{/* profile tabs */}

<div className={styles.profile}>
  <Container>
  <Tabs>
    <Row>


        {/*=============== Nav Bills =====================*/}
      <Col md={3} className="p-0">
        <div className={styles.nav_content}>
            <ul className={styles.back}>
                <li><Link href="/"><a><FontAwesomeIcon icon={faArrowRight}  color={"#FFF"} width={20}/>  رجوع للرئيسية</a></Link></li>
                </ul>
                <div className={styles.avatar}>
                <div className="avater_logo">
                    <Image
                        src="/assets/profile/student.png"
                        alt="logo"
                        width="92"
                        height="92"
                        objectFit="contain"
                    />
                </div>
                    <h4 className={styles.avatar_text}>مرحبا أحمد !</h4>
                </div>   

                  <ul className={styles.profile_nav_list}>
                    <Tab><div className={styles.icon_wrapper}><FontAwesomeIcon icon={faTable} color={"#4269EF"} width={14} height={14}/></div><h3 className={styles.text}>جدول الحصص</h3></Tab>
                    <Tab><div className={styles.icon_wrapper}><FontAwesomeIcon icon={faBookBookmark}  color={"#4269EF"} width={14} height={14} /></div><h3 className={styles.text}>المناهج</h3></Tab>
                    <Tab><div className={styles.icon_wrapper}><FontAwesomeIcon icon={faBook} color={"#4269EF"} width={14} height={14}/></div><h3 className={styles.text}>حل الواجب</h3></Tab>
                    <Tab><div className={styles.icon_wrapper}><FontAwesomeIcon icon={faCommentAlt}  color={"#4269EF"} width={14} height={14}/></div><h3 className={styles.text}>شات مع الفصل</h3></Tab>
                  </ul>

       </div>
      </Col>


    {/*=============== TAB CONTENT =====================*/}
      <Col md={9} className="p-0">
      <Panel>
      <div className={`${styles.tab_content} ${styles.class_schedule}`}>

        <Row>
            <Col md={3}>
                <h2 className={styles.table_title}>جدول الحصص</h2>
            </Col>
            <Col md={6}></Col>
            <Col md={3}>
            <div className={styles.full_date}>
                <div className={styles.time}>
                    <span>12:00 AM</span>
                </div>
                <div className={styles.date}>
                    <span>14 SEP</span>
                </div>
            </div>
            </Col>
        </Row>

        <div className={styles.days}>
            <div className={styles.day}>
                <div className={styles.day_head}> الأحد</div>
                <div className={styles.day_body}>
                    <h4>لغة عربية</h4>
                    <div className={styles.time}> 
                        <Image src="/assets/profile/stopwatch.png" alt=".." width="22" height="22" objectFit="contain"/>
                        <span>3:00</span>
                    </div>
                </div>
            </div>
            <div className={styles.day}>
                <div className={styles.day_head}> الأثنين</div>
                <div className={styles.day_body}>
                    <h4>لغة عربية</h4>
                    <div className={styles.time}> 
                        <Image src="/assets/profile/stopwatch.png" alt=".." width="22" height="22" objectFit="contain"/>
                        <span>3:00</span>
                    </div>
                </div>
            </div>
            <div className={styles.day}>
                <div className={styles.day_head}> الثلاثاء</div>
                <div className={styles.day_body}>
                    <h4>لغة عربية</h4>
                    <div className={styles.time}> 
                        <Image src="/assets/profile/stopwatch.png" alt=".." width="22" height="22" objectFit="contain"/>
                        <span>3:00</span>
                    </div>
                </div>
            </div>
            <div className={styles.day}>
                <div className={styles.day_head}> الأربعاء</div>
                <div className={styles.day_body}>
                    <h4>لغة عربية</h4>
                    <div className={styles.time}> 
                        <Image src="/assets/profile/stopwatch.png" alt=".." width="22" height="22" objectFit="contain"/>
                        <span>3:00</span>
                    </div>
                </div>
            </div>
            <div className={styles.day}>
                <div className={styles.day_head}> الخميس</div>
                <div className={styles.day_body}>
                    <h4>لغة عربية</h4>
                    <div className={styles.time}> 
                        <Image src="/assets/profile/stopwatch.png" alt=".." width="22" height="22" objectFit="contain"/>
                        <span>3:00</span>
                    </div>
                </div>
            </div>

        </div>

        </div>

      </Panel>


      </Col>




    </Row>
    </Tabs>
  </Container>
</div>



      </main>
    </>
  );
}

