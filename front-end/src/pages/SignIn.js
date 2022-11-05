import axios from "axios";
import { useState, useEffect, useContext } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

function SignIn() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [responseError, setResponseError] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  const { setUserSignedIn, setUserId, addMovieToWatchlist, clearWatchlist } =
    useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const getWatchlist = (userId) => {
    axios({
      method: "get",
      url: `http://127.0.0.1:4000/watchlist/${userId}`,
    })
      .then((response) => {
        console.log("response: ", response.data);
        response.data.forEach((movie) => addToWatchList(movie.movie_id));
      })
      .catch((err) => console.log(err));
  };

  const addToWatchList = (movieId) => {
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${movieId}?api_key=d1a96bd28a613550710fa181a44fe9f9`,
    })
      .then((response) => {
        console.log("response: ", response);

        addMovieToWatchlist(response.data);
      })
      .catch((err) => console.log("err: ", err));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios({
        method: "post",
        url: "http://127.0.0.1:4000/signin",
        data: {
          user_email: formValues.email,
          user_password: formValues.password,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            clearWatchlist();
            getWatchlist(response.data.userId);
            setUserSignedIn(true);
            setUserId(response.data.userId);
            navigate(`/Home`);
          }
        })
        .catch((err) => {
          if (err.response.status === 401) {
            console.log("Incorrect details provided");
            setResponseError("Incorrect username or password");
          }
        });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
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
    return errors;
  };

  return (
    <div className="Wallpaper">
      {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
      <form className="SignUpForm" onSubmit={handleSubmit}>
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
        <input type="submit" value="Sign In" />
        <div> {responseError} </div>
        <Link to="/SignUp">
          <button>Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
