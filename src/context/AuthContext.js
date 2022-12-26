import React, { createContext, useContext, useState, useEffect } from "react";
import  {useRouter}  from 'next/router';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AuthContext = createContext();
import axios from 'axios';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; 

export const useAuth = () => {
  return useContext(AuthContext);
};

// We provide our context with value
export const AuthProvider = ({ children }) => {
  const router = useRouter()

  const [displayName, setDisplayName] = useState("");
  const [token, setToken] = useState(null);
  const [localToken, setLocalToken] = useState(null);
  const [loading, setLoading] = useState(true);
//   const history = useHistory();


const login = (formData) => {

    let url = `${process.env.NEXT_PUBLIC_API_URI}student/login`;
    return axios(url, {
              method: "post",
              headers: { "Content-Type": "application/json", },
              data: JSON.stringify(formData)
          })
          .then((response) => {
            const {student, token} = response.data;
            // console.log(response.data);
            // store values in localStorage
            // if (typeof window !== "undefined") {
            // setLocalToken(token); 



            localStorage.setItem( 'token', token );
            localStorage.setItem( 'student', JSON.stringify(student) );
            // }
            setDisplayName(student.name); 
            setToken(token); 
            toast.success( `تم تسجيل الدخول بنجاح مرحباً يا  ${student.name}!`,{})
            router.push('/profile')
          })
          .catch((error) => toast.error(`البيانات الذى ادخلتها غير صحيحة`, {}));
      
  };

  const logout = () => {
    
    confirmAlert({
      title: "تسجيل الخروج",
      message: "هل أنت متأكد أنك تريد تسجيل الخروج؟",
      buttons: [
        {
          label: "نعم",
          onClick: () => {
            // logout!
            setDisplayName('');
            localStorage.removeItem( 'token' );
            localStorage.removeItem( 'student' );
            setToken(null);
            toast.success(`تم تسجيل خروج بنجاح`, {});        

          },
        },
        {
          label: "لا",
          onClick: () => {
            console.log("")
          },
        },
      ],
    });

  };




  // Cleanup subscription on unmount
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       // console.log(user ? user.displayName : null);
//       setLoading(false);
//     });
//     // Cleanup subscription on unmount
//     return () => unsubscribe();
//   }, []);

  const value = {
    login,
    logout,
    displayName,
    token
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      {/* {!loading && children} */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </AuthContext.Provider>
  );
};