import { AuthProvider } from "../src/context/AuthContext";

// Packages Styles
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-grid.min.css';


//styles
import '../styles/global.css'

// layout 
import Header from "../src/components/layout/Header";
import Footer from "../src/components/layout/Footer";





function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Header />
          <Component {...pageProps} />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default MyApp;
