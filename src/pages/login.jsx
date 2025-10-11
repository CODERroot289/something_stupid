import Header from "../Header/Header.jsx"
import Footer from "../Footer/footer.jsx"
import "./css/Reg_log.css"
import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { FcGoogle } from "react-icons/fc"; // for Google icon

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      await signInWithPopup(auth, googleProvider);

      // alert("Logged in with Google!");
      // Redirect to another page
      window.location.href = "/dashboard"; // or any URL

    } catch (error) {
      // alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      // alert("Logged in successfully!");
      window.location.href = "/dashboard"
    } catch (error) {
      // alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <>
      <Header/>
      <div id="content">
        <div id="card">
          <h1 >Welcome Back</h1>
          <p >Sign in to your account</p>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="aForm"
          >
            <FcGoogle className="text-2xl mr-2" />
            {loading ? "Signing in..." : "Sign in with Google"}
          </button>

          {/* Divider */}

          <p>or</p>
          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email"
              className="aForm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="aForm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br></br>
            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in with Email"}
            </button>
          </form>

          {/* Footer Links */}
          <div >
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </>



  );
}


// export default function Login() {
// const getSystemTheme = () =>  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//   // console.log(getSystemTheme())
//   document.documentElement.setAttribute('data-theme', getSystemTheme());

//   return(
//     <>
//       <div className="bgi"></div>
//     <Header/>

//     <div className="home">
//       <section className="hero">
//         <h1>Welcome</h1>
//         <p>GIVE UPON YOUR DREAMS AND DIE</p>
//       </section>

//     </div>


//     <Footer/>
//     </>
//     )

// }
