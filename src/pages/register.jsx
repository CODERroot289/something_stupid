import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"
import "./css/Reg_log.css"
import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

import { useNavigate } from "react-router-dom";

const getSystemTheme = () =>  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', getSystemTheme());

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Google sign up
  const handleGoogleSignup = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      // alert("Account created with Google!");
      // window.location.href = "/dashboard"
      navigate("/dashboard")
    } catch (error) {
      // alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Email sign up
  const handleEmailSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account created successfully!");
      // window.location.href = "/dashboard"
      navigate("/dashboard")
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     <div className="bgi"></div>
    <Header/>
    <div id="content">
    <div id="card">
      {/*<div style={{width:"100%",AlignContent: "space-between"}}>*/}
        <h1 >Create Account</h1>
        <p>
          Sign up to get started
        </p>

        {/* Google Signup */}
        <button
          className="aForm"
          onClick={handleGoogleSignup}
          disabled={loading}
        >
          <FcGoogle />
          {loading ? "Signing up..." : "Sign up with Google"}
        </button>

        <p>or</p>
        {/* Email Signup Form */}
        <form onSubmit={handleEmailSignup} >
          <input
            className="aForm"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br></br>

          <input
            className="aForm"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="aForm"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <br></br>
          <button
            // className="aForm"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>

        {/* Footer Links */}
        <div >
          Already have an account?{" "}
          <a href="/login" >
            Log in
          </a>
        </div>



      
    </div>
  </div>
    </>
  );
}

// export default function Register() {
// const getSystemTheme = () =>  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   // console.log(getSystemTheme())
//   document.documentElement.setAttribute('data-theme', getSystemTheme());

//   return(
//     <>
//       <div className="bgi"></div>
//     <Header/>

//     <div className="home">
//       <section className="hero">
//         <h1>Register</h1>
//         <p></p>
//       </section>

//     </div>


//     <Footer/>
//     </>
//     )

// }
