import axios from "axios";
import { useState, useEffect } from "react";
import "./SignUp.css";

function SignUp() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios({
        method: "post",
        url: "http://127.0.0.1:4000/signup",
        data: {
          first_name: formValues.firstName,
          last_name: formValues.lastName,
          user_email: formValues.email,
          user_password: formValues.password,
        },
      })
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    if (!values.firstName) {
      errors.firstName = "Please enter your first name";
    }
    if (!values.lastName) {
      errors.lastName = "Please enter your last name";
    }
    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email";
    }

    if (!values.password) {
      errors.password = "Please enter your password";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed 10 characters";
    }

    if (!values.repeatPassword) {
      errors.repeatPassword = "Please repeat your password";
    } else if (values.password !== values.repeatPassword) {
      errors.repeatPassword = "Passwords don't match";
    }

    return errors;
  };

  return (
    <div className="Wallpaper">
      <form className="SignUpForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formValues.firstName}
          onChange={handleChange}
        />
        <div> {formErrors.firstName} </div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formValues.lastName}
          onChange={handleChange}
        />
        <div> {formErrors.lastName} </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <div> {formErrors.email} </div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <div> {formErrors.password} </div>
        <input
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
          value={formValues.repeatPassword}
          onChange={handleChange}
        />
        <div> {formErrors.repeatPassword} </div>
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
