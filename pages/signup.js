import Image from "next/image";
import Link from "next/link";
import Meta from "../src/components/Meta";
const signup = () => {
  return (
    <>
      <Meta title="Fino | Signup" />
      <main className="main-content">
        <section className="contact-page body-inner login-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <div className="contact-inner">
                  <div className="contact-form">
                    <h3>Create an account. </h3>
                    <form action="#">
                      <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" />
                      </div>

                      <div className="form-group wrap-btn">
                        <button type="submit" className="btn btn-form" style={{minWidth: '100%',marginBottom: '18px'}}>
                          <span>Create Account</span>
                        </button>
                      </div>

                      <div className="form-group text-center">
                        <p className="text-muted" style={{fontSize:'16px'}}>Already have an account?</p>
                        <Link href="/login"> Login</Link>
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

export default signup;
