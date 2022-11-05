import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import SignUp from "../pages/SignUp";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("axios", () => ({
  axios: jest.fn(),
}));

describe("SignUp", () => {
  beforeEach(() => {
    render(
      <Router>
        <SignUp />
      </Router>
    );
  });

  test("Ensure placeholder text is correct", () => {
    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Repeat Password")).toBeInTheDocument();
  });

  test("Ensure sign up button is there", () => {
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("Sign up validation ", () => {
    fireEvent.click(screen.getByText("Sign Up"));
    expect(
      screen.getByText("Please enter your first name")
    ).toBeInTheDocument();
    expect(screen.getByText("Please enter your last name")).toBeInTheDocument();
    expect(screen.getByText("Please enter your email")).toBeInTheDocument();
    expect(screen.getByText("Please enter your password")).toBeInTheDocument();
    expect(screen.getByText("Please repeat your password")).toBeInTheDocument();
  });
});
