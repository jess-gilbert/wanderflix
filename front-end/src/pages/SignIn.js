import "./SignUp.css";
import { Link } from "react-router-dom";

function SignIn() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="Wallpaper">
      <form className="SignUpForm" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input type="submit" value="Sign In" />
        <Link to="/SignUp">
          <button>Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
