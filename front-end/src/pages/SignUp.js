import "./SignUp.css";

function SignUp() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <div className="Wallpaper">
      <form className="SignUpForm" onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
