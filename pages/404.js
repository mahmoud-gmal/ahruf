import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from "next/router";

import { Col, Container, Row } from 'react-bootstrap';
import Meta from '../src/components/Meta';
// styles
import styles from "./../styles/pages/404.module.css";

export default function FourOhFour() {
// lang
const { locale, locales, asPath } = useRouter();

  return <>
      <Meta title="ahruf | 404" />
    <div className={styles.error_page}>
        <Container>
            <Row>
                <Col md={6}>
                    <div className={styles.text_wrapper}>
                        <h2> {locale == "en" ? "Page not found" : "لم يتم إيجاد الصفحة"}</h2>
                        <p>{locale == "en" ? "Sorry, the page you are looking for is not available now due to some technical problems" : " عذراً الصفحة التي تبحث عنها غير متاحة الان بسبب بعض المشاكل التقنية"}</p>
                        <Link href="/"><a className="special_btn"><span> {locale == "en" ? "Back to the home page" : "الرجوع للصفحة الرئيسية "}</span> </a></Link>
                    </div>
                    
                </Col>
                <Col md={6}>
                    <div className={styles.image_wrapper}>
                    <Image
                                src="/assets/404.png"
                                alt="logo"
                                width="459"
                                height="394"
                                // layout="fill"
                                objectFit="contain"
                                priority
                            />
                    </div>
                </Col>

            </Row>
        </Container>


    </div>

  </>
}