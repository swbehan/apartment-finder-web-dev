import express from "express";

const listingsRouter = express.Router();

// THIS IS A DATA ENDPOINT that the route will send information back to the client side
listingsRouter.get("/listings", (req, res) => {
  res.json({
    listings,
  });
});

export default listingsRouter;
