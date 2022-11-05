import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import SignIn from "../pages/SignIn";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios", () => ({
  axios: jest.fn(),
}));

describe("SignIn", () => {
  beforeEach(() => {
    render(
      <Router>
        <SignIn />
      </Router>
    );
  });

  test("Ensure placeholder text is correct", () => {
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  test("Ensure sign in and sign up buttons are there", () => {
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("Sign in validation ", () => {
    fireEvent.click(screen.getByText("Sign In"));
    expect(screen.getByText("Please enter your email")).toBeInTheDocument();
    expect(screen.getByText("Please enter your password")).toBeInTheDocument();
  });

  test("Sign up button link ", () => {
    fireEvent.click(screen.getByText("Sign Up"));
    expect(window.location.pathname).toEqual("/SignUp");
  });
});
