import Image from "next/image";
import Link from "next/Link";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faCaretDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";
import styles from "./../../../styles/layout/Header.module.css";

const Header = () => {

//   const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : '');
//   const handleWindowSizeChange = () => {
//           setWidth(window.innerWidth);
//   }

//   useEffect(() => {
//     window.addEventListener('resize', handleWindowSizeChange);
//     return () => {
//         window.removeEventListener('resize', handleWindowSizeChange);
//     }
// }, []);

// if(width <= 992){
// console.log("width <= 768");
// }

const [status, setStatus] = useState(false);

const handleClick = () =>{
  setStatus(!status)
}


  return (

    <>
      <div className={`${styles.header} ${styles.desktop_mode}`}>
        <Container>
          <Row className="align-items-center">
            {/* LOGO */}
            <Col md={2}>
              <div className={styles.logo}>
                <Link href="/">
                  <a>
                    <Image
                      alt="logo"
                      src="/assets/Logo.png"
                      width="200"
                      height="66"
                      // layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            </Col>
            
            {/* Navbar */}
            <Col md={5}>
              <div className={styles.main_navbar}>
                <ul className={`d-flex justify-content-center`}>
                  <li>
                    <Link href="/">من نحن</Link>
                  </li>
                  <li className={styles.drop}>
                    <Link href="/">
                      <a className={styles.menu}>
                        البرامج المتاحة <FontAwesomeIcon icon={faCaretDown} />
                      </a>
                    </Link>
                    <ul className={styles.menu_dropdown}>
                      <li>
                        <Link href="/">من نحن</Link>
                      </li>
                      <li>
                        <Link href="/">من نحن</Link>
                      </li>
                      <li>
                        <Link href="/">من نحن</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/">باقات الاشتراك</Link>
                  </li>
                  <li>
                    <Link href="/">اتصل بنا</Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Left side */}
            <Col md={5}>
              <div className="left_side d-flex align-items-center justify-content-end">
                <div className={`${styles.lang}`}>
                  <Link href="/"><a><FontAwesomeIcon icon={faLanguage} /><span>english</span></a></Link>
                </div>
                <div className={styles.btns}>
                  <Link href="/">
                    <a className={`special_btn ${styles.btn_log}`}>
                     <span> دخول ولي الامر </span>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="special_btn"><span>انضم الينا</span></a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>




      {/*----------- Start Mobile mode -----------------*/}
      <div className={`${styles.header} ${styles.mobile_mode}`}>
        <Container>
          <Row className="align-items-center">
            {/* LOGO */}
            <Col xs={6}>
              <div className={styles.logo}>
                <Link href="/">
                  <a>
                    <Image
                      alt="logo"
                      src="/assets/Logo.png"
                      width="200"
                      height="66"
                      // layout="responsive"
                    />
                  </a>
                </Link>
              </div>
            </Col>
            
            {/* Navbar */}
            <Col xs={6}>
              <div className={styles.main_navbar}>
                <div className={styles.menu_toggle}><FontAwesomeIcon icon={faBars} onClick={handleClick}/></div>
                {status && (
                <ul className={`d-flex flex-direction-column ${styles.mobile_list_nav}`}>
                <div className={styles.logo_wraper}>
                <Link href="/">
                  <a className={styles.mobile_logo}>
                    <Image
                      alt="logo"
                      src="/assets/Logo.png"
                      width="265"
                      height="88"
                      objectFit="contain"
                      // layout="fill"
                      
                    />
                  </a>
                </Link>
                 <div className={styles.close_icon} onClick={handleClick}><FontAwesomeIcon icon={faTimes} /></div>
              </div>

                  <li>
                    <Link href="/">من نحن</Link>
                  </li>
                  <li className={styles.drop}>
                    <Link href="/">
                      <a className={styles.menu}>
                        البرامج المتاحة <FontAwesomeIcon icon={faCaretDown} />
                      </a>
                    </Link>
                    <ul className={styles.menu_dropdown}>
                      <li>
                        <Link href="/">من نحن</Link>
                      </li>
                      <li>
                        <Link href="/">من نحن</Link>
                      </li>
                      <li>
                        <Link href="/">من نحن</Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link href="/">باقات الاشتراك</Link>
                  </li>
                  <li>
                    <Link href="/">اتصل بنا</Link>
                  </li>
                </ul>
                )}
              </div>
            </Col>

          </Row>
        </Container>
      </div>      
      {/*----------- End Mobile mode -----------------*/}


    </>
  );
};

export default Header;
