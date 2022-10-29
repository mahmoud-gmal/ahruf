import Image from "next/image";
import Link from "next/Link";
import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";
import styles from "./../../../styles/layout/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
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
                      layout="responsive"
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
    </>
  );
};

export default Header;
