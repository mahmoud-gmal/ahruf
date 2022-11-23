import Router from 'next/router'
import Image from "next/image";
import Link from "next/Link";
import Meta from "../src/components/Meta";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, FormGroup } from 'react-bootstrap';
// styles
import styles from "./../styles/pages/forget.module.css";
const Forget = () => {



  return (
    <>
      <Meta title="ahruf | Forget" />
      <main className="main-content">


          <Container>
          <div className={styles.form_wrapper}>
            <h2> نسيت كلمة المرور </h2>
            <p>ادخل البريد الإلكتروني لنقوم بإرسال طريقة استرجاع كلمة المرور من خلاله</p>
            <Form>

        <Form.Group controlId="emailID">
          <Form.Label> البريد الإلكترونى </Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="example@test.com" />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>


      <div className='d-flex justify-content-center' style={{marginTop: '25px'}}>

      <Button type="submit" className='special_btn' style={{display: 'block',width: '100%'}}> <span> إرسال </span> </Button>     
      </div>

            </Form>

            </div>

            <div className={styles.form_info}>
            <span> إذا لم تتمكن من إرجاع كلم مرورك </span>
            <Link href="/contact"><a>إتصل بنا</a></Link>
            </div>
          </Container>
     
      </main>
    </>
  );
};

export default Forget;
