import Router from 'next/router'
import Image from "next/image";
import Link from "next/Link";
import Meta from "../src/components/Meta";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, FormGroup } from 'react-bootstrap';
// styles
import styles from "./../styles/pages/login.module.css";


const Login = () => {



  return (
    <>
      <Meta title="ahruf | login" />
      <main className="main-content">


          <Container>
          <div className={styles.form_wrapper}>
            <h2>
            تسجيل الدخول
            </h2>
            <Form>

        <Form.Group controlId="emailID">
          <Form.Label> البريد الإلكترونى </Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="example@test.com" />
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
          label="تذكرنى"
          // feedback="You must agree before submitting."
          // feedbackType="invalid"
        />
                <Link 
                href="/forget-password"><a className={styles.forget} style={{
                  display: 'inlineBlock',
                  marginRight: 'calc(100% - 174px)'
                }}>هل نسيت كلمة المرور؟</a></Link>
      </Form.Group>
      <div className='' >

      </div>
      <div className='d-flex justify-content-center' style={{marginTop: '25px'}}>

      <Button type="submit" className='special_btn' style={{display: 'block',width: '100%'}}> <span>تسجيل دخول</span> </Button>     
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
            <span>ليس لديك عضوية؟</span>
            <Link href="/signup"><a>سجل حساب جديد</a></Link>
            </div>
          </Container>
     
      </main>

    </>
  );
};

export default Login;


{/* <div className="row justify-content-center">
<div className="col-md-7">
  <div className="contact-inner">
    <div className="contact-form">
      <h3>Login </h3>
      <form onSubmit={submitHandler}>
        <FormGroup controlId='emailID'>
          <label>Username</label>
          <input type="text" name="username" className="form-control" ref={usernameRef} required/>
        </FormGroup>
        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" className="form-control" ref={passwordRef} autoComplete="on" required/>
        </div>
        <div className="form-group">
          <div className="row">
              <div className="col-6">
                  <label className="aiz-checkbox">
                      <input type="checkbox" name="remember" />
                      <span className="text-muted ml-2">Remember Me</span>
                      <span className="aiz-square-check"></span>
                  </label>
              </div>
              <div className="col-6 text-right">
                  <Link href="/forget-password" className="text-muted">Forgot password?</Link>
              </div>
          </div>
         </div>
        <div className="form-group wrap-btn">
          <button type="submit" className="btn btn-form" style={{minWidth: '100%',marginBottom: '18px'}}>
            <span>Login</span>
          </button>
        </div>

        <div className="form-group text-center">
          <p className="text-muted" style={{fontSize:'16px'}}>Dont have an account?</p>
          <Link href="/signup">Register Now</Link>
        </div>

      </form>
    </div>
  </div>
</div>

</div> */}