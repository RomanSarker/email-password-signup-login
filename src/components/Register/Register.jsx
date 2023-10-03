import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState();
  const [showPassword, setShowpassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);

    //reset error/success
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Need at least one upper case character");
      return;
    } else if (!accepted) {
      setRegisterError("Please Accept our terms and condition");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="">
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl">Please Register</h2> <br />
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 border border-red-200 w-full rounded-sm px-3 py-3	"
            placeholder="Enter Email"
            type="email"
            name="email"
            id=""
            required
          />{" "}
          <br />
          <div className=" mb-4 relative">
            <input
              className=" border border-red-200 w-full	 rounded-sm px-3 py-3"
              placeholder="Enter Password"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              required
            />
            <span
              className="absolute top-3 my-1 right-2"
              onClick={() => setShowpassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>{" "}
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept Our <a href="">Terms and Condition</a>{" "}
            </label>
          </div>
          <br />
          <input
            className="mb-4 border border-red-200 w-full btn btn-secondary	"
            type="submit"
            value="register"
          />
        </form>
        {success && <p className="text-green-600">{success}</p>}
        {registerError && <p className="text-red-600">{registerError}</p>}
        <p>
          Already Have an account?? <Link to="/login">Please Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
