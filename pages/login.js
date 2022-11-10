import Router from 'next/router'
import { useRef } from "react";
import Image from "next/image";
import Link from "next/Link";
import Meta from "../src/components/Meta";
import { useAuth } from "../src/context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

const { login } = useAuth();
const usernameRef = useRef();
const passwordRef = useRef();

const submitHandler = async (event) => {
    event.preventDefault();

    try {
      await login(usernameRef.current.value, passwordRef.current.value);
      toast.success(`${usernameRef.current.value}تم تسجيل الدخول بنجاح ، مرحباً`,{
        autoClose: 2000,
      });
      Router.push("/");
    } catch (err) {
      if(err.response.data.code == "invalid_username"){
        toast.error('اسم المسخدم غير صحيح', {})
      }else{
        toast.error('الرقم السرى غير صحيح', {})
      }
      // console.log(err.response.data.code);
    }

  };

  return (
    <>
      <Meta title="Fino | login" />
      <main className="main-content">
        <section className="contact-page body-inner login-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <h3>Login </h3>
                    <form onSubmit={submitHandler}>
                      <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" ref={usernameRef} required/>
                      </div>
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




            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;
