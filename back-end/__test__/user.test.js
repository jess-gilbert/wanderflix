import app from "../app.js";
import connection from "../config/database.js";
// followed tutorial : https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/

const request = require("supertest");

/*SIGNIN-TESTS*/

const signinRequest = {
  body: {
    user_email: "fake_email",
    user_password: "fake_password",
  },
};

const signinRequestExistingUser = {
  body: {
    user_email: "ozge@gmail.com",
    user_password: "1234",
  },
};

describe("Test the root path", () => {
  test("It should response the GET method", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});

describe("Test with incorrect email or/password", () => {
  test("It should response the POST method", async () => {
    const response = await request(app)
      .post("/signin")
      .send(signinRequest.body);
    expect(response.statusCode).toBe(401);
  });
});

describe("Test with incorrect email or/password", () => {
  test("It should response the 200", async () => {
    const response = await request(app)
      .post("/signin")
      .send(signinRequestExistingUser.body);
    expect(response.statusCode).toBe(200);
  });
});

describe("Test with empty body", () => {
  test("It should response the 400 ", async () => {
    const response = await request(app).post("/signin").send();
    expect(response.statusCode).toBe(400);
  });
});

/*SIGNUP-TESTS*/

const signUpRequest = {
  body: {
    first_name: "Code First",
    last_name: "Girls",
    user_email: "cfg2@gmail.com",
    user_password: "1234",
  },
};

const signUpExistingUser = {
  body: {
    first_name: "Ozge",
    last_name: "Ozersahin",
    user_email: "ozge@gmail.com",
    user_password: "1234",
  },
};

describe("Test with successfully sign up", () => {
  test("It should response the 200", async () => {
    const response = await request(app)
      .post("/signup")
      .send(signUpRequest.body);
    expect(response.statusCode).toBe(200);
    deleteFromInsterted(signUpRequest.body.user_email);
  });
});

describe("Test with empty body", () => {
  test("It should response the 400 ", async () => {
    const response = await request(app).post("/signup").send();
    expect(response.statusCode).toBe(400);
  });
});

describe("Test with account already exist", () => {
  test("It should response the 403", async () => {
    const response = await request(app)
      .post("/signup")
      .send(signUpExistingUser.body);
    expect(response.statusCode).toBe(403);
  });
});


// deleting the inserted obj in signup test

async function deleteFromInsterted(user_email) {
  try {
    await connection
      .promise()
      .query("DELETE FROM users WHERE user_email = ? ", [user_email]);
  } catch (error) {
    console.log("Error while deleting test obj");
  }
}
