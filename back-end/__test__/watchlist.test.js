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



  describe("Watchlist API test", () => {
    test("Add a movie", async () => {
  
      const response = await request(app).post("/watchlist").send(watchlistAdded.body);
      expect(response.statusCode).toBe(200);
    });

    test("Bring the movie exists", async () => {
  
      const response = await request(app).get("/watchlist/16").send(watchlistAdded.body);
      expect(response.statusCode).toBe(200);
    });

    test("Add a movie already exits", async () => {
  
      const response = await request(app).post("/watchlist").send(watchlistAdded.body);
      expect(response.statusCode).toBe(403);
    });

    test("Remove the added movie", async () => {
  
      const response = await request(app).delete("/watchlist").send(watchlistRemove.body);
      expect(response.statusCode).toBe(202);
    });

    test("Test nothing to delete from watchlist", async () => {
      const response = await request(app).delete("/watchlist").send(watchlistRemove.body);
      expect(response.statusCode).toBe(200);
    });

    test("Bad request test", async () => {
      const response = await request(app).post("/watchlist").send();
      expect(response.statusCode).toBe(400);
    });
  });


