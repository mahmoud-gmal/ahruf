import Router from 'next/router'
import Image from "next/image";
import Link from "next/Link";
import Meta from "../src/components/Meta";
import { toast } from "react-toastify";
import { Button, Container, Form } from 'react-bootstrap';
// styles
import styles from "./../styles/pages/signup.module.css";
const Signup = () => {



  return (
    <>
      <Meta title="ahruf | Signup" />
      <main className="main-content">
          <Container>
          <div className={styles.form_wrapper}>
            <h2>
            إنشاء حساب
            </h2>
            <Form>

              <Form.Group controlId="nameID">
                <Form.Label> الاسم </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="الاسم" />
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="emailID">
                <Form.Label> البريد الإلكترونى </Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="example@test.com" />
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="emailID">
                <Form.Label>  رقم الجوال </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="رقم الجوال " />
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="passID">
                <Form.Label> كلمة المرور </Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="كلمة المرور"/>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="remeberID" style={{marginTop: '17px'}}>
              <Form.Check
                className={styles.form_check}
                style={{ display: 'inline-flex', alignItems: 'center'}}
              />
              <Form.Label className="agree_condtion"> اوافق على  <Link href="/conditions"><a> شروط واحكام </a></Link>اكاديمية منصة احرف</Form.Label>
            </Form.Group>
            

      <div className='d-flex justify-content-center' style={{marginTop: '25px'}}>
        <Button type="submit" className='special_btn' style={{display: 'block',width: '100%'}}> <span> إنشاء حساب </span> </Button>     
      </div>

            </Form>
             <div className={styles.form_under_text}>
              <span className={styles.or_dashed}>او</span>
              <div className={styles.google_signin}>
              <Link href="/">
                  <a>
                    <Image
                      alt="logo"
                      src="/assets/icons8-google.svg"
                      width="24"
                      height="24"
                      // layout="responsive"
                    />
                    <span>تابع بإستخدام ايميل جوجل</span>

                  </a>
                </Link>
              </div>

             </div>
            </div>

            <div className={styles.form_info}>
            <span>ليس لديك حساب</span>
            <Link href="/login"><a> سجل دخول الان</a></Link>
            </div>

          </Container>
      </main>
    </>
  );
};

export default Signup;

