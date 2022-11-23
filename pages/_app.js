import { AuthProvider } from "../src/context/AuthContext";
// import { useRouter } from "next/router";
// Packages Styles
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';


//styles
import '../styles/global.css'
import '../styles/style-en.css'

// layout 
import Header from "../src/components/layout/Header";
import Header2 from "../src/components/layout/Header-2";
import Footer from "../src/components/layout/Footer";


// const { locale, locales, asPath } = useRouter();

function MyApp({ Component, pageProps, router  }) {
  if (router.pathname.startsWith('/login') || router.pathname.startsWith('/signup') || router.pathname.startsWith('/forget-password')) {

    return (
      <div className="wrap_app memb">
      <Header2 />
      <Component {...pageProps} />
      </div>
    )

}
  
  return (
    <>
    <div className="wrap_app">
      <AuthProvider>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </AuthProvider>
      </div>

    </>
  );
}

export default MyApp;
