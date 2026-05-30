import express from "express";

const listings = [{
    title: "Cozy Apartment in Downtown",
    address: "123 Main st, Cityville",
    price: 1200,
    bedrooms: 2,
    notes: "",
    photos: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150"
    ]
}];
const listingsRouter = express.Router();

// THIS IS A DATA ENDPOINT that the route will send information back to the client side
listingsRouter.get("/listings", (req, res) => {
  res.json({
    listings
  });
});

export default listingsRouter;
