import React, { useState } from "react";
import { useAuth } from "./../src/context/AuthContext";
import Router from 'next/router'
import axios from 'axios';
import Meta from "../src/components/Meta";
import { toast } from "react-toastify";
import { Button, Container, Form } from 'react-bootstrap';
// styles
import styles from "./../styles/forms/login.module.css";


//hook-form & yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("اسم المستخدم مطلوب."),
  password: Yup.string()
    .required(".كلمة المرور مطلوبة")
    // .min(8, 'كلمة المرور قصيرة جدًا - يجب ألا تقل عن 8 أحرف.')
    // .matches(/[a-zA-Z]/, 'يمكن أن تحتوي كلمة المرور على أحرف لاتينية فقط.'),
});

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eye_slash = <FontAwesomeIcon icon={faEyeSlash} />


const LoginPage = () => {

  const { login } = useAuth();
  const [token, setToken] = useState();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  const { register,handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(validationSchema)
  });


  const onSubmit =  async (values) =>{

    const formData = {
      login_username: values.name,
      password: values.password,
      remember_me: values.rememberme
    }
    try {
      await login(formData);
      // history.push("/");
    } catch (error) {
      console.log('page error');
      console.log(error);
    }

    // let url = `${process.env.NEXT_PUBLIC_API_URI}student/login`;
    // axios(url, {
    //   method: "post",
    //   headers: { "Content-Type": "application/json", },
    //   data: JSON.stringify(formData)
    // })
    //   .then((response) => {
    //     const {student, token} = response.data;
    //     setToken(token);
    //   })
    //   .catch((error) => {
    //     //handle error
    //     console.log(error);
    //   });




  }




  return (
    <>
      <Meta title="ahruf | login" />
      <main className="main-content">


          <Container>
          <div className={styles.form_wrapper}>
            <h2>
            تسجيل الدخول
            </h2>
      <Form noValidate onSubmit={handleSubmit(onSubmit)}>

        <Form.Group controlId="emailID">
          <Form.Label> الإسم </Form.Label>
          <Form.Control
            type="text"
            placeholder="الإسم" 
            {...register("name")} isInvalid={!!errors.name}/>

        {errors.name?.message && (<Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>)}
        </Form.Group>


        <Form.Group className="password_wrap"  controlId="passID">
          <Form.Label> كلمة المرور </Form.Label>
          <Form.Control
            type={passwordShown ? "text" : "password"}
            placeholder="كلمة المرور"
            {...register("password")} isInvalid={!!errors.password}/>
          <i onClick={togglePasswordVisiblity}>{passwordShown ? eye : eye_slash}</i>
          {errors.password?.message && (<Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>)}
        </Form.Group>


        {/* <Form.Group className="mb-3" controlId="formGroupremember">
          <Form.Control type="checkbox"  {...register("rememberme")}/>
          <Form.Label> تذكرنى</Form.Label>
        </Form.Group>    */}

        <Form.Group controlId="remeberID" style={{marginTop: '17px'}}>
        <Form.Check
          className={styles.form_check}
          style={{ display: 'inline-flex', alignItems: 'center'}}
          label="تذكرنى"
          type="checkbox"  {...register("rememberme")}
          // feedback="You must agree before submitting."
          // feedbackType="invalid"
        />
                {/* <Link 
                href="/forget-password"><a className={styles.forget} style={{
                  display: 'inlineBlock',
                  marginRight: 'calc(100% - 174px)'
                }}>هل نسيت كلمة المرور؟</a></Link> */}
      </Form.Group>
      <div className='' >

      </div>
      <div className='d-flex justify-content-center' style={{marginTop: '25px'}}>

      <Button type="submit" className='special_btn' style={{display: 'block',width: '100%'}}> <span>تسجيل دخول</span> </Button>     
      </div>

            </Form>
             {/* <div className={styles.form_under_text}>
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

             </div> */}
            </div>
            {/* <div className={styles.form_info}>
            <span>ليس لديك عضوية؟</span>
            <Link href="/signup"><a>سجل حساب جديد</a></Link>
            </div> */}
          </Container>
     
      </main>

    </>
  );
};

export default LoginPage;
