import app  from "../app.js";
const request = require("supertest");


  const watchlistAdded = {
    body: {
      movie_id: "661791",
      user_id :"16"
    },
  };
 

  const watchlistRemove = {
    body: {
      movie_id: "661791",
      user_id: "16",
    },
  };



  describe("Test with added movie", () => {
    test("It should response the 200", async () => {
  
      const response = await request(app).post("/watchlist").send(watchlistAdded.body);
      expect(response.statusCode).toBe(200);
    });
  });


  describe("Test with duplicate entry", () => {
    test("It should response the 403", async () => {
  
      const response = await request(app).post("/watchlist").send(watchlistAdded.body);
      expect(response.statusCode).toBe(403);
    });
  });
  
  
  describe("Test with deleted movie", () => {
    test("It should response the 202", async () => {
  
      const response = await request(app).delete("/watchlist").send(watchlistRemove.body);
      expect(response.statusCode).toBe(202);
    });
  });

describe("Test with nothing to delete from watchlist", () => {
    test("It should response the 202", async () => {
  
      const response = await request(app).delete("/watchlist").send(watchlistRemove.body);
      expect(response.statusCode).toBe(200);
    });
  });

  describe("Test with Bad Request", () => {
    test("It should response the 400 ", async () => {
  
      const response = await request(app).post("/watchlist").send();
      expect(response.statusCode).toBe(400);
    });
  });


  describe("Test with getting the movies in the Watchlist", () => {
    test("It should response the 200", async () => {
  
      const response = await request(app).get("/watchlist/16").send(watchlistAdded.body);
      expect(response.statusCode).toBe(200);
    });
  });


