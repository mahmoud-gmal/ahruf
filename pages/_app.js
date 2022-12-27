import { AuthProvider } from "../src/context/AuthContext";
// import { useRouter } from "next/router";
// Packages Styles
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';

import { motion, AnimatePresence  } from "framer-motion";
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
      <AuthProvider>
        <div className="wrap_app memb">
        <Header2 />
        <Component {...pageProps} />
        </div>
      </AuthProvider>
    )

}
  
else if (router.pathname.startsWith('/profile')) {

  return (
    <AuthProvider>
      <div className="profile" style={{background: '#F8FBFF'}}>
      <Component {...pageProps} />
      </div>
    </AuthProvider>
  )

}


  return (
  
    <>
    {/* <AuthProvider>
        <AnimatePresence exitBeforeEnter>
          <motion.div
          key={router.route}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 0, opacity: 0 }}
          transition={{ duration: 0.2 }} 

        // pass the router.locale as the key, so every time it change it will trigger the animation
        // key={router.locale}
        // initial={{ y: 10, opacity: 0 }}
        // animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.8 }}


          // initial="initial"
          // animate="animate"
          // variants={{
          //   initial: {
          //     opacity: 0,
          //   },
          //   animate: {
          //     opacity: 1,
          //   },
          // }}
        >
*/}
            <AuthProvider>
              <div className="wrap_app1">
                    <Header />
                      <Component {...pageProps} />
                    <Footer />
               </div>
            </AuthProvider>


            {/* </motion.div>
          </AnimatePresence>
       </AuthProvider> */}
    </>
  );
}

export default MyApp;
